//Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, a new year, and also leap years.

function getNextDay(inputDate) {
    // Parse the input date in 'yyyy-mm-dd' format (or any valid date format)
    const date = new Date(inputDate);

    // Increment the day by one
    date.setDate(date.getDate() + 1);

    // Format the next day's date as 'yyyy-mm-dd'
    const nextDay = date.toISOString().split('T')[0];  // Extract date in 'yyyy-mm-dd' format

    return nextDay;
}

const inputDate = prompt('Enter the date in format (yyyy-mm-dd)'); 
console.log(`The next date is : `, getNextDay(inputDate));

