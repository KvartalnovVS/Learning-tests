let input = document.querySelector('input');
let result = document.querySelector('.result');
let squaredRootBtn = document.querySelector('.squared');
let cubedRootBtn = document.querySelector('.cubed');

squaredRootBtn.onclick = function searchSqRt() {
    let num = input.value;
    let sqRt = Math.sqrt(num);

    result.textContent = 'Квадратный корень числа ' + num + ': ' + sqRt + '.';

}

cubedRootBtn.addEventListener('click', searchCbRt);

function searchCbRt() {
    let num = input.value;
    let cbRt = Math.cbrt(num);
    result.textContent = 'Кубический корень числа ' + num + ': ' + cbRt + '.';
}