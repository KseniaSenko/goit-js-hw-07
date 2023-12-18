const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

const item = items.forEach(el => {
    console.log(`Categories: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`)
});
