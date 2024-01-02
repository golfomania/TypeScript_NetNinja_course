// type guard

type Id = number | string;

const swapIdType = (id: Id): Id => {
  if (typeof id === "number") {
    return id.toString();
  } else {
    return parseInt(id);
  }
};

console.log(swapIdType(22));
console.log(swapIdType("78"));

// tagged interfaces
interface AAA {
  type: "AAA";
  name: string;
}

interface BBB {
  type: "BBB";
  age: number;
}

const printIt = (input: AAA | BBB): void => {
  if (input.type === "AAA") {
    console.log(input.name);
  } else {
    console.log(input.age);
  }
};

printIt({ type: "AAA", name: "John" });
