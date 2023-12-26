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
const { inputValue, createBoxesBtn, destroyBoxesBtn, boxesEl } = refs;

function createBoxes() {
  const num = Number(inputValue.value);

  refs.boxesEl.textContent = '';

  if (num >= inputValue.min && num <= inputValue.max) {
    for (let i = 0; i < num; i += 1){
      const box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundColor = getRandomHexColor();
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      boxesEl.append(box);
      inputValue.value = '';
    };
  };
};

function destroyBoxes() {
  refs.boxesEl.textContent = '';
  inputValue.value = '';
};

createBoxesBtn.addEventListener('click', createBoxes);
destroyBoxesBtn.addEventListener('click', destroyBoxes);
