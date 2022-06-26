const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsHtml = document.querySelector("#ingredients");

const elements = ingredients.map((el) => 
{
  const ingridientItem = document.createElement('li');
  ingridientItem.type = 'type';
  ingridientItem.classList.add('item');
  ingridientItem.textContent = el;

  return ingridientItem;
})

ingredientsHtml.append(...elements);
