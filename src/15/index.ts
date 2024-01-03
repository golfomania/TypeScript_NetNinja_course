// extending interfaces

interface IBase {
  id: number;
}

interface IBasePlus extends IBase {
  name: string;
}

const base: IBasePlus = {
  id: 1,
  name: "John",
};

console.log(base);

interface IBasePlusPlus extends IBasePlus {
  shout(): string;
}

const basePlusPlus: IBasePlusPlus = {
  id: 1,
  name: "John",
  shout(): string {
    return `Hello ${this.name}`;
  },
};

console.log(basePlusPlus.shout());
