// functions

function add(a: number, b: number): number {
  return a + b;
}

let result = add(10, 20);
// let result = add(10, "20"); // error
console.log(result);

// arrow functions
const add2 = (a: number, b: number): number => {
  return a + b;
};

let result2 = add2(10, 50);
console.log(result2);

// void
const total = (input: number[]): void => {
  console.log(input.reduce((a, b) => a + b));
};

total([1, 2, 3, 4, 5]);
