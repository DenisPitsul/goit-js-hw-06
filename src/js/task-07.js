const fontizeControlInput = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontizeControlInput.addEventListener("input", (event) => {
    const fontSize = event.currentTarget.value;
    console.log(fontSize);
    textSpan.style.fontSize = fontSize + "px";
});