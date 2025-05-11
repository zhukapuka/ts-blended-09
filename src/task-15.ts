// Задача 15
// Функція fetchProducts повертає проміс, який через затримку повертає список товарів.
// Товар має такі поля:

// id - число
// title - рядок
// price - число
// function fetchProducts() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([
//         { id: 1, title: "Laptop", price: 1000 },
//         { id: 2, title: "Phone", price: 500 }
//       ]);
//     }, 1000);
//   });
// }
// fetchProducts().then(products => console.log(products));

// Завдання:
// Оголоси тип Product для товару.
// Додайте до функції явну типізацію, вкажіть, що вона повертає проміс, який приводиться до масиву товарів.

type Product = {
  id: number;
  title: string;
  price: number;
};
function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Laptop", price: 1000 },
        { id: 2, title: "Phone", price: 500 },
      ]);
    }, 1000);
  });
}
(async () => {
  const products = await fetchProducts();
  console.log(products);
})();
