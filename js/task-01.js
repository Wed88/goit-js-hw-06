const categoriesLinksEl = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesLinksEl.length);

const categoriestitlesEl = document.querySelectorAll('.item h2');
console.log('Category:', categoriestitlesEl[0].textContent);

const categoriesLinkEl = document.querySelectorAll('li ul');
console.log('Elements:', categoriesLinkEl[0].children.length);

console.log('Category:', categoriestitlesEl[1].textContent);
console.log('Elements:', categoriesLinkEl[1].children.length);

console.log('Category:', categoriestitlesEl[2].textContent);
console.log('Elements:', categoriesLinkEl[2].children.length);
