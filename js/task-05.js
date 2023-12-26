function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColor = document.querySelector('.change-color');

changeColor.addEventListener('click', onClickChangeColor);

function onClickChangeColor() {
  const colorText = document.querySelector('.color');
  const body = document.querySelector('body');
  colorText.textContent = getRandomHexColor();
  
  body.style.backgroundColor = colorText.textContent;
}
