// union types - one of several types

let unionType: number | string;

unionType = 22;
unionType = "22";
// unionType = true; // error

let unionTypes: (number | string)[];
unionTypes = [22, "22"];
// unionTypes = [22, "22", true]; // error

// make null possible
let email: string | null;
email = null;
email = "hahahaha";
