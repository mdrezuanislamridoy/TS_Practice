// function add(a: number, b: number): number {
//   return a + b;
// }

// console.log(add(1, 2));

const showVal = (val: string | number): void => {
  console.log(val);
};

showVal("Hello");

// We can show error using return type void

// let showOneError = (msg: string): void => {
//   console.log(msg);
// };

// let showError = (msg: string): never => {
//   throw new Error(msg);
// };

// this will use for throwing error
