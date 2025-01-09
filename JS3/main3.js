//Ask the user for a three-digit number and print it backwards. To solve the problem, you will need the % operator (remainder of division).

// Prompt the user for a three-digit number
let number = prompt("Enter a three-digit number:");

// Ensure it's a valid three-digit number
if (number >= 100 && number <= 999) {
    // Convert the string to a number
    let num = parseInt(number);

    // Extract digits using modulus (%) and division (/)
    let ones = num % 10;          // Get the ones place
    let tens = Math.floor(num / 10) % 10;  // Get the tens place
    let hundreds = Math.floor(num / 100);  // Get the hundreds place

    // Print the number backwards
    let reversed = `${ones}${tens}${hundreds}`;
    console.log("Reversed number: " + reversed);
} else {
    console.log("Please enter a valid three-digit number.");
}
