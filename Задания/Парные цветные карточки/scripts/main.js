let block = document.querySelector('.block');
//let block1 = document.getElementById('block1');
let clicks = [];

function Blocks(number) {
    this.number = number;
    this.adress = document.getElementById(`block${number}`);
    this.color = 0;
    this.active = false;

    this.adress.onclick = function () {
        if (window['block' + number].active !== true) {
            document.getElementById(`block${number}`).classList.add('flip');
            document.getElementById(`block${number}`).style.backgroundColor = window['block' + number].color;
            window['block' + number].active = true;
            clicks.push(window['block' + number]);
            activeBlocks();
        }
    };

    this.back = function () {
        setTimeout(() => {
            document.getElementById(`block${number}`).classList.remove('flip');
            document.getElementById(`block${number}`).style.backgroundColor = 'rgb(100, 100, 100)';
            window['block' + number].active = false;
        }, 1000);
    };
}

for (let i = 1; i <= 16; i++) {
    window['block' + i] = new Blocks(i);

}

let blockNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
for (let i = 0; i < 8; i++) {
    let randomNum = blockNumber[Math.floor(Math.random() * blockNumber.length)];
    blockNumber.splice(blockNumber.indexOf(randomNum), 1);
    let randomNum2 = blockNumber[Math.floor(Math.random() * blockNumber.length)];
    blockNumber.splice(blockNumber.indexOf(randomNum2), 1);
    let color = randomRGB();
    for (let i = 1; i <= 16; i++) {
        if (window['block' + i].number === randomNum || window['block' + i].number === randomNum2) {
            window['block' + i].color = color;
        }
    }
}

function random(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1) + min);
    return num;
}
function randomRGB() {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

let actives = [];
function activeBlocks() {
    if (clicks.length === 2) {
        actives[0] = clicks[0];
        actives[1] = clicks[1];

        clicks = [];
        if (actives[0].color === actives[1].color) {
            //block1.style.filter = 'drop-shadow(0 0 10px green)';
            //block2.style.filter = 'drop-shadow(0 0 10px green)';
            actives[0].adress.style.filter = 'drop-shadow(0 0 10px green)';
            actives[1].adress.style.filter = 'drop-shadow(0 0 10px green)';
        }
        if (actives[0].color !== actives[1].color) {
            actives[0].back();
            actives[1].back();
        }
    }
}
