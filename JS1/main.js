// Question 1 [Request a user’s name and display the response “Hello, [name]”]

const myName = prompt("Enter your name");
console.log(`Hello ${myName}`);

// Question 2 [Request a user’s year of birth, count his age, and display the result. Store the current year as a constant]

const yearOfBirth = prompt("Enter the year of birth");
const currentYear = 2025;
const age = Math.abs(currentYear - yearOfBirth);
console.log(`The age is ${age}`);

// Question 3 [Request a length of a side of a square from a user and display the perimeter of the square]

const lengthOfSquare = prompt("Enter the length of a side");
const perimeter = Math.abs(4 * lengthOfSquare);
console.log(`The perimeter of the square is ${perimeter}`);

// Question 4 [Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time]

const distance = prompt("Enter the distance between two cities in km");
const timeToCover = prompt(`Enter the time needed to cover`);
const speedNeeded = Math.abs(distance / timeToCover);
console.log(`The speed needed to reach on time is ${speedNeeded}`);

// Question 5 [A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive]

const gigaByte = prompt("Enter the number of GB");
const megaByte = Math.abs(gigaByte * 1000);
const storage = Math.abs(megaByte / 820);
console.log(`The number of 820 MB files can be stored is  ${storage}`);

// Question 6 [A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left]

const wallet = prompt("Enter the amount in the wallet");
const priceOfChocolate = prompt("Enter the price of one chocolate bar");
const numberOfChocolate = Math.abs(wallet / priceOfChocolate);
console.log(`The number of chocolate bars that we can buy is ${numberOfChocolate}`);

// Question 7 [The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest]

const sum = prompt("Enter the sum of bank deposits for 2 months with a yearly interest rate of 5%");
const interest = Math.abs(sum * 0.05);
console.log(`The sum of interest ${interest}`);
