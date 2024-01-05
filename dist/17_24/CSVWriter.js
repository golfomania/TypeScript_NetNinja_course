"use strict";
// CSV Writer mini project
// take in payments, give aout csv file
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CSVWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = "";
        this.csv += `${columns.join(",")}\n`;
    }
    addPayment(payments) {
        payments.forEach((payment) => {
            this.csv += `${this.formateRow(payment)}\n`;
        });
    }
    formateRow(paymentElement) {
        return this.columns.map((column) => paymentElement[column]).join(",");
    }
    save(filename) {
        (0, fs_1.appendFileSync)(filename, this.csv);
        this.csv = "\n";
    }
    get getCSV() {
        return this.csv;
    }
}
const csvWriter = new CSVWriter(["id", "amount", "from", "to", "notes"]);
const payment1 = {
    id: 1,
    amount: 100,
    from: "Brandon",
    to: "Sarah",
    notes: "Dinner",
};
const payment2 = {
    id: 2,
    amount: 200,
    from: "Sarah",
    to: "Brandon",
    notes: "Uber",
};
let payments1 = [payment1, payment2];
csvWriter.addPayment(payments1);
console.log(csvWriter.getCSV);
csvWriter.save("./data/payments.csv");
