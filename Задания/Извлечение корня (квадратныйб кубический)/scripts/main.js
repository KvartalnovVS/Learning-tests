let input = document.querySelector('input');
let para = document.querySelector('p');
let squaredRootBtn = document.querySelector('.squared');
let cubedRootBtn = document.querySelector('.cubed');

squaredRootBtn.onclick = function searchSqRt() {
    let num = input.value;
    let sqRt = Math.sqrt(num);

    if (isNaN(num)) {
        para.textContent = 'Введите число!'
    } else {
        para.textContent = 'Квадратный корень числа ' + num + ': ' + sqRt + '.';
    }

}

cubedRootBtn.addEventListener('click', searchCbRt);
function searchCbRt() {
    let num = input.value;
    let cbRt = Math.cbrt(num);

    if (isNaN(num)) {
        para.textContent = 'Введите число!'
    } else {
        para.textContent = 'Кубический корень числа ' + num + ': ' + cbRt + '.';
    }
}
