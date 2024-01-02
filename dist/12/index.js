"use strict";
// type guard
const swapIdType = (id) => {
    if (typeof id === "number") {
        return id.toString();
    }
    else {
        return parseInt(id);
    }
};
console.log(swapIdType(22));
console.log(swapIdType("78"));
const printIt = (input) => {
    if (input.type === "AAA") {
        console.log(input.name);
    }
    else {
        console.log(input.age);
    }
};
printIt({ type: "AAA", name: "John" });
