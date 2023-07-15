const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let elements = "";

ingredients.forEach(ingredient => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  elements += li.outerHTML;
});

document.querySelector("ul#ingredients").innerHTML = elements;
