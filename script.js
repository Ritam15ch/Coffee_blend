// You can add JavaScript functionality for the cart or button here.

const orderButton = document.querySelector('.order-btn');

orderButton.addEventListener('click', () => {
    alert('Order button clicked!');
});

const readMoreBtn = document.querySelector('.read-more-btn');

readMoreBtn.addEventListener('click', () => {
    alert('Read More button clicked!');
});

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const coffeeItems = document.querySelector('.coffee-items');

prevBtn.addEventListener('click', () => {
    coffeeItems.scrollBy({
        left: -250,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    coffeeItems.scrollBy({
        left: 250,
        behavior: 'smooth'
    });
});

const prev1Btn = document.querySelector('.prev-btn');
const next1Btn = document.querySelector('.next-btn');
const breakfastItemsContainer = document.querySelector('.breakfast-items-container');

prevBtn.addEventListener('click', () => {
    breakfastItemsContainer.scrollBy({
        left: -250,
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    breakfastItemsContainer.scrollBy({
        left: 250,
        behavior: 'smooth'
    });
});
