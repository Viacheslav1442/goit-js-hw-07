// Знаходимо список з категоріями
const categoriesList = document.querySelector('#categories');

// Знаходимо всі елементи з класом item (категорії)
const categoryItems = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

// Перебираємо кожну категорію
categoryItems.forEach(item => {
    // Знаходимо заголовок категорії
    const categoryTitle = item.querySelector('h2').textContent;

    // Знаходимо всі підкатегорії (елементи списку li)
    const categoryElements = item.querySelectorAll('ul li');

    // Виводимо назву категорії та кількість елементів
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryElements.length}`);
});