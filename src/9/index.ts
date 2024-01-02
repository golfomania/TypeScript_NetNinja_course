// interfaces

interface Person {
  name: string;
  age: number;
}

let userB: Person;

userB = {
  name: "John",
  age: 22,
};

interface Post {
  title: string;
  content: string;
  date: Date;
  author: Person;
}

let post: Post;

post = {
  title: "Hello World",
  content: "This is my first post",
  date: new Date(),
  author: userB,
};

function printName(person: Person) {
  console.log(person.name);
}

printName(userB);

let posts: Post[];

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
