const dataInput = document.querySelector("#controls input");
const dataCreate = document.querySelector("[data-create]");
const dataDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = amount => {
  const boxesList = []
  for(let i = 0; i < amount; i++) {
    const divElem = `<div style="width: ${30 + i * 10}px; height: ${30 + i * 10}px; background-color: ${getRandomHexColor()};"></div>`
    boxesList.push(divElem);
  }
  boxes.insertAdjacentHTML('beforeend', boxesList.join(''));
}

dataCreate.addEventListener('click', () => {
  if (
    Number(dataInput.value.trim()) > Number(dataInput.max) ||
    Number(dataInput.value.trim()) < Number(dataInput.min)
  ) {
    alert('Please enter number from 1 to 100');
  } else {
    createBoxes(dataInput.value.trim());
    dataInput.value = '';
  }
})

dataDestroy.addEventListener('click', () => {
  dataInput.value = '';
  boxes.innerHTML = '';
})
