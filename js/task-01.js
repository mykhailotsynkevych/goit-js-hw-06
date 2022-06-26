const CategoriesList = document.querySelectorAll('.item');
console.log('Number of categories:', CategoriesList.length);

const descrEl = CategoriesList.forEach((el) => 
{
    console.log('Category:', el.firstElementChild.textContent);
    console.log('Elements:', el.lastElementChild.children.length)
})

