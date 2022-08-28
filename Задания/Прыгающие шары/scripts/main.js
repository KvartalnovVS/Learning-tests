// setup canvas
const para = document.querySelector('p');
let count = 0;

const btn = document.querySelector('.btn');
const speedBtn = document.querySelector('.speed');

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number

function game() {



    function random(min, max) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num;
    }

    // function to generate random color

    function randomRGB() {
        return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
    }

    function Shape(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
    }

    function Ball(x, y, velX, velY, color, size) {
        Shape.call(this, x, y, velX, velY);

        this.color = color;
        this.size = size;
        this.exists = true;
    }
    Ball.prototype = Object.create(Shape.prototype);
    Object.defineProperty(Ball.prototype, 'constructor', {
        value: Ball,
        enumerable: false,
        writable: true
    });

    Ball.prototype.draw = function () {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.fill();
    }

    Ball.prototype.update = function () {
        if ((this.x + this.size) >= width) {
            this.velX = -(this.velX);
        }
        if ((this.x - this.size) <= 0) {
            this.velX = -(this.velX);
        }
        if ((this.y + this.size) >= height) {
            this.velY = -(this.velY);
        }
        if ((this.y - this.size) <= 0) {
            this.velY = -(this.velY);
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    Ball.prototype.collisionDetect = function () {
        for (let j = 0; j < balls.length; j++) {
            if (!(this === balls[j])) {
                let dx = this.x - balls[j].x;
                let dy = this.y - balls[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
                }
            }
        }
    }

    function EvilCircle(x, y) {
        Shape.call(this, x, y, 20, 20);

        this.color = 'white';
        this.size = 10;
    }
    EvilCircle.prototype = Object.create(Shape.prototype);
    Object.defineProperty(EvilCircle.prototype, 'constructor', {
        value: EvilCircle,
        enumerable: false,
        writable: true
    });

    EvilCircle.prototype.setControls = function () {
        let _this = this;
        window.onkeydown = function (e) {
            if (e.keyCode === 65 || e.keyCode === 37) {
                _this.x -= _this.velX;
            } else if (e.keyCode === 68 || e.keyCode === 39) {
                _this.x += _this.velX;
            } else if (e.keyCode === 87 || e.keyCode === 38) {
                _this.y -= _this.velY;
            } else if (e.keyCode === 83 || e.keyCode === 40) {
                _this.y += _this.velY;
            }
        }
    }

    EvilCircle.prototype.draw = function () {
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
    }

    EvilCircle.prototype.checkBounds = function () {
        if ((this.x + this.size) >= width) {
            this.x -= this.size;
        }
        if ((this.x - this.size) <= 0) {
            this.x += this.size;
        }
        if ((this.y + this.size) >= height) {
            this.y -= this.size;
        }
        if ((this.y - this.size) <= 0) {
            this.y += this.size;
        }
    }

    EvilCircle.prototype.collisionDetect = function () {
        for (let j = 0; j < balls.length; j++) {
            if (balls[j].exists) {
                let dx = this.x - balls[j].x;
                let dy = this.y - balls[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < this.size + balls[j].size) {
                    balls[j].exists = false;
                    count--;
                    para.textContent = 'Ball count: ' + count;
                    if (count === 0) {
                        finish();
                    }
                }
            }
        }
    }

    /*
    class EvilCircle extends Shape {
    
        constructor(x, y) {
            super(x, y, 20, 20);
    
            this.color = "white";
            this.size = 10;
    
            window.addEventListener('keydown', (e) => {
                switch (e.key) {
                    case 'a':
                        this.x -= this.velX;
                        break;
                    case 'd':
                        this.x += this.velX;
                        break;
                    case 'w':
                        this.y -= this.velY;
                        break;
                    case 's':
                        this.y += this.velY;
                        break;
                }
            });
        }
    
        draw() {
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = 3;
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.stroke();
        }
    
        checkBounds() {
            if ((this.x + this.size) >= width) {
                this.x -= this.size;
            }
    
            if ((this.x - this.size) <= 0) {
                this.x += this.size;
            }
    
            if ((this.y + this.size) >= height) {
                this.y -= this.size;
            }
    
            if ((this.y - this.size) <= 0) {
                this.y += this.size;
            }
        }
    
        collisionDetect() {
            for (const ball of balls) {
                if (ball.exists) {
                    const dx = this.x - ball.x;
                    const dy = this.y - ball.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
    
                    if (distance < this.size + ball.size) {
                        ball.exists = false;
                        count--;
                        para.textContent = 'Ball count: ' + count;
                    }
                }
            }
        }
    
    }
    */
    let balls = [];

    function createBall() {
        while (balls.length < 25) {
            let ball = new Ball(
                random(0, width),
                random(0, height),
                random(-7, 7),
                random(-7, 7),
                'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
                random(10, 20)
            );
            balls.push(ball);

            count++;
            para.textContent = 'Ball count: ' + count;
        }
    }

    const evilBall = new EvilCircle(random(0, width), random(0, height));
    evilBall.setControls();

    function loop() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < balls.length; i++) {
            if (balls[i].exists === true) {
                balls[i].draw();
                balls[i].update();
                balls[i].collisionDetect();
            }
        }
        evilBall.draw();
        evilBall.checkBounds();
        evilBall.collisionDetect();

        requestAnimationFrame(loop);
    }
    loop();
    createBall();
    /*speedBtn.onclick = function () {
        loop();
    }*/
}

btn.onclick = function () {
    para.style.display = 'block';
    btn.style.position = 'absolute';
    btn.style.display = 'none';
    btn.textContent = 'Restart game';
    btn.style.height = '40px';
    btn.style.width = '80px';
    //speedBtn.style.display = 'block';
    game();
}

function finish() {
    para.style.display = 'none';
    btn.style.display = 'block';
    btn.style.height = '80px';
    btn.style.width = '160px';
    //speedBtn.style.display = 'none';
    canvas.clearRect(0, 0, canvas.width, canvas.height);
}