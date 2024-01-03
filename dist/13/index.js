"use strict";
const printQuant = (input) => {
    console.log(input.quantity);
};
printQuant({ quantity: 22 });
// printQuant({ quantity: "22" }); // error
const fruit = {
    name: "Apple",
    quantity: 21,
};
printQuant(fruit);
