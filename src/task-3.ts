// Задача 3
// Опис: Є об’єкт користувача:

// const user= { id: "1", name: "Charlie", age: 25, active: true };

// Завдання:
// Типізуйте user.
// Зробіть властивість id тільки для читання.

interface User {
  readonly id: string;
  name: string;
  age: number;
  active: boolean;
}

const user: User = { id: "1", name: "Charlie", age: 25, active: true };
