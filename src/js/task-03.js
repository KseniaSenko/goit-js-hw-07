const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', onInputKeydown);

function onInputKeydown(event) {
    const inputValue = event.target.value.trim();
    nameOutput.textContent = inputValue ? inputValue : 'Anonymous';
}