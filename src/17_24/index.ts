// classes

type Base = "classic" | "thick" | "thin" | "garlic";

interface HasFormatter {
  format(): string;
}

abstract class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get getTitle(): string {
    return this.title;
  }

  get getPrice(): number {
    return this.price;
  }

  get details(): string {
    return `${this.title} - €${this.price}`;
  }

  abstract format(): string;
}

class Pizza extends MenuItem {
  private base: Base = "classic";
  private toppings: string[] = [];

  constructor(title: string, price: number) {
    super(title, price);
  }

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  changeBase(base: Base): void {
    this.base = base;
  }

  get getBase(): Base {
    return this.base;
  }

  get getToppings(): string[] {
    return this.toppings;
  }

  format(): string {
    let fotmatted = this.details + "\n";

    //base
    fotmatted += `pizza on a ${this.base} base.\n`;

    //toppings
    if (this.toppings.length) {
      fotmatted += "Toppings:\n";
      this.toppings.forEach((topping) => {
        fotmatted += `- ${topping}\n`;
      });
    }
    return fotmatted;
  }
}

const pizzaM = new Pizza("Margaritha", 10);
pizzaM.addTopping("cheese");
const pizzaF = new Pizza("Funghi", 12);

function printFormatted(elem: HasFormatter): void {
  console.log(elem.format());
}

printFormatted(pizzaM);
