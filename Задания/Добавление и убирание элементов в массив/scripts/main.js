let addStartBtn = document.querySelector('.addStart');
let deleteStartBtn = document.querySelector('.deleteStart');
let addEndBtn = document.querySelector('.addEnd');
let deleteEndBtn = document.querySelector('.deleteEnd');
let display = document.querySelector('.display');

let showMessage = [];

let messages = ['Hello!',
    'Goodbye',
    'How are you?',
    'When you come here?',
    'What are you doing now?',
    'Who are you?'];

function random() {
    let randomMessage = Math.round(Math.random() * (messages.length - 1));
    return randomMessage;
}

function button(btn) {
    if (btn === shift) {
        return showMessage.shift(messages[random()]);
    }
    if (btn === unshift) {
        return showMessage.unshift(messages[random()]);
    }
    if (btn === push) {
        return showMessage.push(messages[random()]);
    }
    if (btn === pop) {
        return showMessage.pop(messages[random()]);
    }
}

function displayMessage() {
    while (display.firstChild) {
        display.removeChild(display.firstChild);
    }
    for (let i = 0; i < (showMessage.length); i++) {
        let para = document.createElement('p');
        para.textContent = '* ' + showMessage[i];
        display.appendChild(para);
    }
    console.log(showMessage);
}

addStartBtn.onclick = function () {
    showMessage.unshift(messages[random()]);
    displayMessage();
}
deleteStartBtn.onclick = function () {
    showMessage.shift();
    displayMessage();
}
addEndBtn.onclick = function () {
    showMessage.push(messages[random()]);
    displayMessage();
}
deleteEndBtn.onclick = function () {
    showMessage.pop();
    displayMessage();
}