const categoriesList = document.querySelectorAll("#categories .item")

console.log("Number of categories: " + categoriesList.length);

categoriesList.forEach(categoriesListItem => {
    console.log("\nCategory: " + categoriesListItem.querySelector("h2").textContent);
    console.log("Elements: " + categoriesListItem.querySelectorAll("ul li").length);
});