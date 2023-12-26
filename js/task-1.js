const categories = document.querySelector('#categories');
const categoryItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach(el => {
    console.log(`Categories: ${el.firstElementChild.textContent}`)
    console.log(`Elements: ${el.lastElementChild.children.length}`)
});
