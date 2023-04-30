// TODO Lessons 1

// const button = document.querySelector("button")! as HTMLInputElement;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: number, num2: number) {
//   return num1 + num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });

// TODO Lessons 2

// 1 Задайте правильні ts типи для класичних js;

// let age: number;
// age = 50;
// let name: string;
// name = 'Max';
// let toggle: boolean;
// toggle = true;
// let empty: null;
// empty = null;
// let notInitialize: undefined;
// notInitialize = undefined;
// let callback = (a: number) => number;
// callback = (a) => { return 100 + a };

// 2 Задайте тип для змінної, в яку можна зберегти будь-яке значення.

// let anything: any;
// anything = -20;
// anything = 'Text';
// anything = {};

// 3 Виправте код зі змінною unknown, щоб у нього можна було зберегти змінну з текстом.

// let some:unknown;
// some = 'Text';

// let str: string;

// if (typeof some === 'string') {
//     str = some;
//   }

// 4 Зробіть незмінний масив із суворо описаними типами. Масив для прикладу.

// let person: [string, number];
// person = ['Max', 21];

// 5 Опишіть enum умову наступну: він повинен відображати статус завантаження. Завантажується (LOADING) та завантажена (READY).

// enum Load {LOADING, READY};

// const page  = {
//     load: Load.LOADING,
// }

// if (page.load === Load.LOADING) {
//     console.log("Page is LOADING");
// }
// if (page.load === Load.READY) {
//     console.log("Page is READY");
// }

// Зробіть змінну, яка може приймати або рядок, або число.

// let union: string | number;

// Зробіть змінну, яка може приймати лише одне значення з двох: 'enable' або 'disable'

// let literal: 'enable' | 'disable';

// Вкажіть типи для наступних функцій

// function showMessage(message: string): void {
//     console.log(message);
//   }
  
  
//   function calc(num1: number, num2: number): number {
//     return num1 + num2;
//   }
  
//   function customError(): never {
//     throw new Error('Error');
//   }

//  5 Створіть свій тип даних на основі наявних даних.

// type Page =  {
//     title: string;
//     likes: number,
//     accounts: string[],
//     status: 'open' | 'close',
//     details?: {
//       createAt: Date,
//       updateAt: Date,
//     }
//   }

// const page1 = {
//     title: 'The awesome page',
//     likes: 100,
//     accounts: ['Max', 'Anton', 'Nikita'],
//     status: 'open',
//     details: {
//       createAt: '2021-01-01',
//       updateAt: '2021-05-01',
//     }
//   }
  
//   const page2 = {
//     title: 'Python or Js',
//     likes: 5,
//     accounts: ['Alex'],
//     status: 'close',
//   }


// TODO Lessons 3

// class Key {
//     private signature: number;

//     constructor () {
//         this.signature = Math.random();
//     }

//     getSignature (): number {
//         return this.signature;
//     }
// }

// class Person {
//     constructor (private key: Key) {};

//     getKey (): Key {
//         return this.key
//     }
// }

// abstract class House {
//     protected door = false;
//     private tenants: Person[] = [];
//     constructor (protected key: Key) {}

//     comeIn (person: Person): void {
//         if (!this.door) {
//             throw new Error('Door is close');
//         }

//         this.tenants.push(person);
//         console.log("Person inside");
//     }

//     abstract openDoor (key: Key): boolean;

// }

// class MyHouse extends House {
//     openDoor (key: Key) {
//         if (key.getSignature() !== this.key.getSignature()) {
//             throw new Error('Door is close');
//         }
//         return this.door = true;
//     }
// }

// const key = new Key();
// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());
// house.comeIn(person);

//TODO Lesson 5

// 1. Є функція, яка повертає Promise, він повертає масив рядків і чисел, опишіть правильно тип.

// function getPromise (): Promise<Array<string | number>> {
//     return new Promise((resolve) => {
//       resolve(['Text', 50]);
//     });
//   }
  
//   getPromise ()
//   .then((data) => {
//     console.log(data);
//   });

// 2. У вас є наступний тип даних

// type AllType = {
//     name: string;
//     position: number;
//     color: string;
//     weight: number
//   }

//   3. Є функція, вона приймає два аргументи, в один потрапляє name і color, в іншу частину - position і weight. Потрібно явно вказати, що ці поля з AllType. І сама функція повертає AllType. Скористайтеся Pick.

// function compare (top: Pick<AllType, "name" | "color">, bottom: Pick<AllType, "position" | "weight">): AllType {
//     return {
//       name: top.name,
//       color: top.color,
//       position: bottom.position,
//       weight: bottom.weight,
//     }
//   }

//   4. Вкажіть дженерики для функції об'єднання об'єктів.

// function merge<T extends object, U extends object> (objA: T, objB: U) {
//     return Object.assign(objA, objB);
//   }
  
// 5. У вас є наступні класи

// class Component<T> {
//     constructor (public props:T) {
  
//     }
//   }

//   interface IProps {
//     title: string
//   }

//   class Page extends Component<IProps> {
//     pageInfo () {
//       console.log(this.props.title);
//     }
//   }

//   Тільки додаючи дженерики для класів та інтерфейс, приберіть помилку.

//TODO Lesson 6
