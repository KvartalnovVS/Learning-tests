//*   Кнопки   
const click = document.querySelector('.click');
const dblClick = document.querySelector('.dblClick');
const hover = document.querySelector('.hover');
const target = document.querySelector('.focus');

//*   Блоки   
const clickBlock = document.querySelector('.clickBlock');
const dblClickBlock = document.querySelector('.dblClickBlock');
const hoverBlock = document.querySelector('.hoverBlock');
const targetBlock = document.querySelector('.focusBlock');

//*   Выключатель   
const switchBtn = document.querySelector('.switch__button');
const paraSwitch = document.querySelector('.switch__text');
const switchDiv = document.querySelector('.switch__info');

//! Запуск игры
switchBtn.addEventListener('click', switchFunc);
//! Игра
function switchFunc() {
    //! Смена цвета ВКЛ/ВЫКЛ INFO
    switchDiv.classList.toggle('on-info');
    //! Смена цвета кнопки включения
    switchBtn.classList.toggle('on-button');

    //! Функция смены цвета карточек
    function bgChange(block) {
        const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';

        block.style.backgroundColor = rndCol;
    }
    //! Вызовы функции смены цвета (с помощью: ONCLICK, ONMOUSEOVER и т.д.)
    click.onclick = function () {
        bgChange(clickBlock);
    }
    dblClick.ondblclick = function () {
        bgChange(dblClickBlock);
    }
    hover.onmouseover = function () {
        bgChange(hoverBlock);
    }
    target.onfocus = function () {
        bgChange(targetBlock);
    }

    //! Если функция включается, то запускается смена цвета
    //! Если функция выключается, то все цвета обнуляются
    if (paraSwitch.textContent === 'Выключено') {
        paraSwitch.textContent = 'Включено';

        function random(number) {
            return Math.floor(Math.random() * (number + 1));
        }
    } else {
        paraSwitch.textContent = 'Выключено';

        clickBlock.style.backgroundColor = 'white';
        dblClickBlock.style.backgroundColor = 'white';
        hoverBlock.style.backgroundColor = 'white';
        targetBlock.style.backgroundColor = 'white';
    }
}