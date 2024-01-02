// any

let aaa: any;

aaa = 10;
aaa = "10";
aaa = true;
aaa = null;
aaa = undefined;

let bbb: any[];

bbb = [10, "10", true, null, undefined];

const ccc = (input: any): any => {
  return input;
};

ccc(10);
ccc("10");
ccc(true);
