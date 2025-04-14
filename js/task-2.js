class Storage {
    // Конструктор приймає масив товарів
    constructor(initialItems) {
        this.#items = initialItems; // Приватна властивість для зберігання товарів
    }

    // Приватна властивість
    #items;

    // Метод для отримання поточного списку товарів
    getItems() {
        return this.#items;
    }

    // Метод для додавання товару до списку
    addItem(newItem) {
        this.#items.push(newItem);
    }

    // Метод для видалення товару з списку
    removeItem(itemToRemove) {
        const index = this.#items.indexOf(itemToRemove);
        if (index !== -1) {
            this.#items.splice(index, 1);
        }
    }
}

// Ініціалізація об'єкта та перевірка роботи методів
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]