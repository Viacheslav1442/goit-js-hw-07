const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
    event.preventDefault(); // ⛔ не перезавантажуємо сторінку

    const { email, password } = form.elements;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // Перевірка на порожні поля
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }

    // Створюємо об’єкт з даними форми
    const formData = {
        email: emailValue,
        password: passwordValue,
    };

    console.log(formData); // ✅ Виводимо об’єкт у консоль

    form.reset(); // 🧹 Очищаємо форму
});