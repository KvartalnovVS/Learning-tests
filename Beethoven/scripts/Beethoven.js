var myImage = document.querySelector('#Titleimg');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/beethoven.jpg') {
        myImage.setAttribute ('src','images/beethoven2.jpg');
    } else {
        myImage.setAttribute ('src','images/beethoven.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please, enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Beethoven is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Beethoven is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}