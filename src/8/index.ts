// tuples = special array with fixed number of elements and order

let person: [string, number, boolean];

person = ["John", 22, true];
// person = [22, "John", true]; // error
// person[0] = 22; // error

// named tuples
let userA: [name: string, age: number, isFiction: boolean];

userA = ["John", 22, true];
// userA = [22, "John", true]; // error
// userA[0] = 22; // error
