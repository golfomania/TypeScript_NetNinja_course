"use strict";
// classes
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get getTitle() {
        return this.title;
    }
    get getPrice() {
        return this.price;
    }
    get details() {
        return `${this.title} - €${this.price}`;
    }
}
class Pizza extends MenuItem {
    ;
    constructor(title, price) {
        super(title, price);
        this.base = "classic";
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter((t) => t !== topping);
    }
    changeBase(base) {
        this.base = base;
    }
    get getBase() {
        return this.base;
    }
    get getToppings() {
        return this.toppings;
    }
    format() {
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
function printFormatted(elem) {
    console.log(elem.format());
}
printFormatted(pizzaM);
