// generics

const logandreturn = <T>(x: T): T => {
  console.log(x);
  return x;
};

logandreturn<string>("hi");
logandreturn<number>(1);
logandreturn<boolean>(true);

interface User {
  name: string;
  score: number;
}

const returnRandomArrayValue = <T>(values: T[]): T => {
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
};

const users: User[] = [
  { name: "user1", score: 10 },
  { name: "user2", score: 20 },
  { name: "user3", score: 30 },
];

const randomUser = returnRandomArrayValue<User>(users);
console.log(randomUser);

// intersection types

interface Animal {
  name: string;
}

interface Bear {
  honey: boolean;
}

type BearAnimal = Animal & Bear;

const bear: BearAnimal = {
  name: "bear",
  honey: true,
};

interface hasID {
  id: number;
}

function addIDtoValue<T>(val: T): T & hasID {
  const id = Math.floor(Math.random() * 100);
  return { ...val, id };
}

interface Post33 {
  title: string;
  thumpsUp: number;
}

const newPost: Post33 = {
  title: "title",
  thumpsUp: 10,
};

const postWithID = addIDtoValue<Post33>(newPost);
console.log(postWithID);

const postWithID2 = addIDtoValue<Post33>({ title: "title2", thumpsUp: 22 });
console.log(postWithID2);

// generic with interface

interface GenericInterface<T> {
  value: T;
  title: string;
}

const newGenericInterface: GenericInterface<number> = {
  value: 10,
  title: "title",
};

// generic with class

class GenericClass<P> {
  constructor(public value: P) {}
}

const newGenericClass = new GenericClass<number>(10);
console.log(newGenericClass.value);

// generic with function

const genericFunction = <T>(value: T): T => {
  return value;
};

// generic constraints

interface Lengthy {
  length: number;
}

const countAndDescribe = <T extends Lengthy>(element: T): [T, string] => {
  let description = "no value";
  if (element.length === 1) {
    description = "got 1 element";
  } else if (element.length > 1) {
    description = `got ${element.length} elements`;
  }
  return [element, description];
};

console.log(countAndDescribe("hi"));
console.log(countAndDescribe(["hi", "hello"]));
console.log(countAndDescribe([]));
