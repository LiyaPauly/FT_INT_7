
//Request a three-digit number from a user and check whether it has identical digits.

const number = prompt('Enter a three-digit number');
const digits = number.toString().split('');
const num = digits.map(Number)
console.log(num);

function checkDigitsEqual(num) {
    if (num[0] == num[1] && num[1] == num[2]) {
        console.log('The digits are equal');
      } else {
        console.log('The digits are not equal');
      }
}
console.log(checkDigitsEqual(num));










