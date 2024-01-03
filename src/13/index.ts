interface hasQuantity {
  quantity: number;
}

const printQuant = (input: hasQuantity): void => {
  console.log(input.quantity);
};

printQuant({ quantity: 22 });
// printQuant({ quantity: "22" }); // error

const fruit = {
  name: "Apple",
  quantity: 21,
};

printQuant(fruit);
