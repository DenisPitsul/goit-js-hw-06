let counterValue = 0;

const valueEl = document.querySelector('#value');
const addOneBtn = document.querySelector('[data-action="increment"]');
const subOneBtn = document.querySelector('[data-action="decrement"]');

addOneBtn.addEventListener("click", () => {
    counterValue++;
    valueEl.textContent = counterValue;
});

subOneBtn.addEventListener("click", () => {
    counterValue--;
    valueEl.textContent = counterValue;
});

