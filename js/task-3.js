const test = document.querySelector("#name-input");
const outText = document.querySelector("#name-output");
test.addEventListener("input", () => {
    const trimmedValue = test.value.trim();
    if (trimmedValue) {
        const result = (outText.textContent = trimmedValue);
        console.log(result);
    } else {
        const errorResult = (outText.textContent = "Anonymous");
        console.log(errorResult);
    }
});