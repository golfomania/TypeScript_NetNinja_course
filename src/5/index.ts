// tsc --init + tsconfig.json
// tsc --watch
// node --watch dist/index.js

console.log("Hello World!");

let names: string[] = ["John", "Jane", "Jack"];
let ages: number[] = [33, 22, 44];
let isFictions: boolean[] = [true, false, true];

names.push("Jill");
// names.push(22); // error

let mixed: (string | number | boolean)[] = ["John", 22, true];

// objects
let user: {
  firstname: string;
  lastname: string;
  age: number;
  isFiction: boolean;
};

user = {
  firstname: "John",
  lastname: "Doe",
  age: 22,
  isFiction: true,
};

user.age = 33;
// user.age = "33"; // error
