//Below is a code that asks the user for two numbers and shows their sum.
//It does not work correctly. The code in the example outputs 12 (for the default field values).
//What is the error? Fix it. The result should be 3.

//let a = prompt("First number?", 1);
//let b = prompt("Second number?", 2);

//alert(a + b); // 12

//In this case, a is "1" (string) and b is "2" (string), and when using the + operator with two strings, JavaScript concatenates them, resulting in "12".

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

// Convert the values to numbers using `Number()` or unary `+`
a = Number(a);
b = Number(b);

alert(a + b); // Outputs: 3
