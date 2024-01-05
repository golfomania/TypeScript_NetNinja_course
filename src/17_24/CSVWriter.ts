// CSV Writer mini project
// take in payments, give aout csv file

import { appendFileSync } from "fs";

interface Payment {
  id: number;
  amount: number;
  from: string;
  to: string;
  notes: string;
}

type PymentColumns = ("id" | "amount" | "from" | "to" | "notes")[];

class CSVWriter {
  constructor(private columns: PymentColumns) {
    this.csv += `${columns.join(",")}\n`;
  }

  private csv: string = "";

  addPayment(payments: Payment[]): void {
    payments.forEach((payment) => {
      this.csv += `${this.formateRow(payment)}\n`;
    });
  }

  private formateRow(paymentElement: Payment): string {
    return this.columns.map((column) => paymentElement[column]).join(",");
  }

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = "\n";
  }

  get getCSV(): string {
    return this.csv;
  }
}

const csvWriter = new CSVWriter(["id", "amount", "from", "to", "notes"]);

const payment1: Payment = {
  id: 1,
  amount: 100,
  from: "Brandon",
  to: "Sarah",
  notes: "Dinner",
};

const payment2: Payment = {
  id: 2,
  amount: 200,
  from: "Sarah",
  to: "Brandon",
  notes: "Uber",
};

let payments1: Payment[] = [payment1, payment2];

csvWriter.addPayment(payments1);

console.log(csvWriter.getCSV);

csvWriter.save("./data/payments.csv");
