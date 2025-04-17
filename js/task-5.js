function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const textColor = document.querySelector(".color");
const bodyColor = document.querySelector("body");
const color = document.querySelector(".change-color");
color.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    bodyColor.style.backgroundColor = randomColor;
    textColor.textContent = randomColor;
});