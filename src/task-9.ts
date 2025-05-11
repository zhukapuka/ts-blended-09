// Задача 9
// Завдання:
// 1. Створіть інтерфейс Container, що містить:
// масив items однакового типу для зберігання елементів.
// метод addItem, який додає елемент до контейнера.
// метод getItem, який повертає елемент за індексом.
// 2. Створіть функцію getLastElement, яка приймає контейнер Container і повертає останній елемент контейнера.
// 3. Створіть два контейнери:
// numberContainer, який містить числа та використовує відповідну типізацію.
// stringContainer, який містить рядки та також використовує відповідну типізацію.
// 4. Використовуйте методи addItem, getItem для перевірки роботи контейнера.
// 5. Переконайтесь, що функція getLastElement працює коректно для різних типів контейнерів (масиви чисел, масиви рядків).
// Примітка:
// Контейнер має підтримувати тільки один тип елементів.
interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T | undefined;
}
function createContainer<T>(): Container<T> {
  return {
    items: [],
    addItem(item: T) {
      this.items.push(item);
    },
    getItem(index: number) {
      return this.items[index];
    },
  };
}
function getLastElement<T>(container: Container<T>): T | undefined {
  return container.items[container.items.length - 1];
}
const numberContainer = createContainer<number>();
numberContainer.addItem(1);
numberContainer.addItem(2);
const stringContainer = createContainer<string>();
stringContainer.addItem("a");
stringContainer.addItem("b");
const lastNumber = getLastElement(numberContainer);
const lastString = getLastElement(stringContainer);
console.log(lastNumber);
console.log(lastString);
