"use strict";
// function signature
const addTwoNums = (a, b) => a + b;
const multiplyTwoNums = (a, b) => a * b;
const divideTwoNums = (a, b) => a / b;
const square = {
    name: "Square",
    calcArea: (a) => a * a,
};
const circle = {
    name: "circle",
    calcArea: (a) => (Math.PI * a) ^ 2,
};
console.log(circle.calcArea(10));
