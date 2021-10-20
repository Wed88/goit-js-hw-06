const categoriesLinksEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesLinksEl.length);

categoriesLinksEl.forEach(item => {
  const category = item.querySelector('h2');
  const element = item.querySelector('ul');
  const itemOfElement = element.querySelectorAll('li');
  console.log(`Category: ${category.textContent}`);
  console.log(`Elements: ${itemOfElement.length}`);
});
