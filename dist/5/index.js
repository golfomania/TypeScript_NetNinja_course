"use strict";
// tsc --init + tsconfig.json
// tsc --watch
// node --watch dist/index.js
console.log("Hello World!");
let names = ["John", "Jane", "Jack"];
let ages = [33, 22, 44];
let isFictions = [true, false, true];
names.push("Jill");
// names.push(22); // error
let mixed = ["John", 22, true];
// objects
let user;
user = {
    firstname: "John",
    lastname: "Doe",
    age: 22,
    isFiction: true,
};
user.age = 33;
// user.age = "33"; // error
