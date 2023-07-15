const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener('blur', event => {
    const dataLength = event.currentTarget.hasAttribute("data-length");
    if(event.currentTarget.value.length === 6) {
        validationInput.classList.add("valid");
        validationInput.classList.remove("invalid");
    } else {
        validationInput.classList.add("invalid");
        validationInput.classList.remove("valid");
    }
});