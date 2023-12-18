function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputValue: document.querySelector('input'),
  createBoxesBtn: document.querySelector('button[data-create]'),
  destroyBoxesBtn: document.querySelector('button[data-destroy]'),
  boxesEl: document.getElementById('boxes'),
}
refs.createBoxesBtn.addEventListener('click', createBoxes);
refs.destroyBoxesBtn.addEventListener('click', destroyBoxes)

const inputValue = () => Number(refs.inputValue.value);
function createBoxes(amount) {
  amount = inputValue();

   refs.boxesEl.innerHTML = '';

  let boxWidth = 30;
  let boxHeight = 30;

  const boxes = [];

  if (amount >= refs.inputValue.min && amount <= refs.inputValue.max) {
    for (let i = 1; i <= amount; i += 1){
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${(boxWidth += 10)}px`;
    box.style.height = `${(boxHeight += 10)}px`;
    boxes.push(box)
  }
  refs.boxesEl.append(...boxes); 
  }  
}

function destroyBoxes() {
  refs.boxesEl.innerHTML = '';
}