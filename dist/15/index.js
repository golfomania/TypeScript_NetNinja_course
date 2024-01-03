"use strict";
// extending interfaces
const base = {
    id: 1,
    name: "John",
};
console.log(base);
const basePlusPlus = {
    id: 1,
    name: "John",
    shout() {
        return `Hello ${this.name}`;
    },
};
console.log(basePlusPlus.shout());
