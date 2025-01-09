//Create three variables for numeric, string, and boolean data,convert each of them to two other types (number -> string and boolean, string -> number and boolean, boolean -> number and string)

// Initial variables
let num = 42;        // numeric data
let str = "123";      // string data
let boolean = true;      // boolean data

// 1. Convert number (num) to string and boolean
let numToString = num.toString();     // number -> string
let numToBoolean = Boolean(num);      // number -> boolean

// 2. Convert string (str) to number and boolean
let strToNumber = Number(str);        // string -> number
let strToBoolean = Boolean(str);      // string -> boolean

// 3. Convert boolean (bool) to number and string
let booleanToNumber = Number(boolean);      // boolean -> number
let booleanToString = boolean.toString();  // boolean -> string

// Display the results
console.log(`Number to String: ${numToString}`);
console.log(`Number to Boolean: ${numToBoolean}`);
console.log(`String to Number: ${strToNumber}`);
console.log(`String to Boolean: ${strToBoolean}`);
console.log(`Boolean to Number: ${booleanToNumber}`);
console.log(`Boolean to String: ${booleanToString}`);
