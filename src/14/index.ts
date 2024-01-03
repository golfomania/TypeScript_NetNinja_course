// function signature

type Calcualtor = (a: number, b: number) => number;

const addTwoNums: Calcualtor = (a, b) => a + b;
const multiplyTwoNums: Calcualtor = (a, b) => a * b;
const divideTwoNums: Calcualtor = (a, b) => a / b;

interface HasArea {
  name: string;
  calcArea: (a: number) => number;
}

const square: HasArea = {
  name: "Square",
  calcArea: (a) => a * a,
};

const circle: HasArea = {
  name: "circle",
  calcArea: (a) => (Math.PI * a) ^ 2,
};

console.log(circle.calcArea(10));
