// extending type alias

type PersonQ = {
  name: string;
  age: number;
};

type Employee = PersonQ & {
  salary: number;
};

type Manager = Employee & {
  teamSize: number;
};

const manager: Manager = {
  name: "John",
  age: 30,
  salary: 5000,
  teamSize: 5,
};

console.log(manager);
