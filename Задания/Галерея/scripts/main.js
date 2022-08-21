const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
const images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];

for (let i = 0; i < images.length; i++) {
  let image = images[i];

  let newImage = document.createElement('img');
  newImage.setAttribute('src', image);
  thumbBar.appendChild(newImage);

  newImage.onmouseover = function (e) {
    //! Получение и присваивание значения атрибута src
    //! при помощи извлечения его из переменной newImage
    //newImageSrc = e.target.getAttribute('src');
    displayedImage.setAttribute('src', e.target.getAttribute('src'));
    //! Более короткий вариант равно значный первому
    //displayedImage.src = e.target.src;
  }
}
/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Светлее';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Темнее';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
}

