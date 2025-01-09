//Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD, etc.) and gets the result. 


const currency = prompt('Enter the needed currency');
const value = prompt('Enter the amount to convert');

if(currency === 'EUR'){
    console.log(`The amount is`,value * 0.969);
}else if(currency === 'SEK'){
    console.log(`The amount is`,value * 11.174);
}else if(currency === 'AUD'){
    console.log(`The amount is`,value * 1.611);
} else {
console.log('Pick the proper currency!!')
}