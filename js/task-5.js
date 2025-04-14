function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomHexColor();

    // Змінюємо фон body
    document.body.style.backgroundColor = randomColor;

    // Виводимо значення кольору в <span>
    colorText.textContent = randomColor;
});