"use strict";
// interfaces
let userB;
userB = {
    name: "John",
    age: 22,
};
let post;
post = {
    title: "Hello World",
    content: "This is my first post",
    date: new Date(),
    author: userB,
};
function printName(person) {
    console.log(person.name);
}
printName(userB);
let posts;
posts = [
    {
        title: "Hello World",
        content: "This is my first post",
        date: new Date(),
        author: userB,
    },
    {
        title: "Hello World 2",
        content: "This is my second post",
        date: new Date(),
        author: userB,
    },
];
