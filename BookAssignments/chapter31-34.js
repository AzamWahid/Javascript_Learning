// 1. Write a program that displays current date and time in
// your browser.

var currTime = new Date();

document.write(currTime)



document.write('<br>');
document.write('<br>');


// 2. Write a program that alerts the current month in words.
// For example December.
var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

alert('Current Month: ' + monthNames[currTime.getMonth()])

document.write('<br>');
document.write('<br>');


// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


alert('Today is ' + dayNames[currTime.getDay()])

document.write('<br>');
document.write('<br>');

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.

let funDay = currTime.getDay(); // 0 = Sunday, 6 = Saturday

if (funDay === 0 || funDay === 6) {
    alert("It’s Fun day");
} else {
    alert("It's not Fun day today!");
}

document.write('<br>');
document.write('<br>');

// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.

var monthDate = currTime.getDate();

if (monthDate < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

document.write('<br>');
document.write('<br>');

// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.

document.write('Current Date: '+ currTime);
document.write('<br>');
document.write('Elapsed milliseconds since January 1, 1970: '+ currTime.getTime());
document.write('<br>');
document.write('Elapsed miniutes since January 1, 1970: '+ Math.floor(currTime.getTime() / (1000 * 60)));

document.write('<br>');
document.write('<br>');

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.

if (currTime.getHours() < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}
document.write('<br>');
document.write('<br>');

// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

let laterDate = new Date(2020, 11, 31);
alert('Later Date: ' + laterDate);


document.write('<br>');
document.write('<br>');

// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

let ramadanStart = new Date(2015, 5, 18); 


let timeDifference = currTime - ramadanStart;

let daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// Alert the number of days passed
alert('Number of days since 1st Ramadan (June 18, 2015): ' + daysPassed);


document.write('<br>');
document.write('<br>');

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.

let startOf2015 = new Date(2015, 0, 1); 


let timeDifference2015 = currTime - startOf2015;

let secondsElapsed = Math.floor(timeDifference2015 / 1000);

document.write('Seconds elapsed since January 1, 2015: ' + secondsElapsed);


document.write('<br>');
document.write('<br>');

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.

var currdate = new Date();
document.write('Current Date: '+currdate);
document.write('<br>');
currdate.setHours(currdate.getHours() + 1)
document.write('1 hour ago: '+currdate);

document.write('<br>');
document.write('<br>');

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?

let currentDate = new Date();

currentDate.setFullYear(currentDate.getFullYear() - 100);

alert('Date 100 years back: ' + currentDate);

document.write('<br>');
document.write('<br>');

// 13. Write a program to ask the user about his age. Calculate
// and show his birth year in your browser.

var userAge = parseInt(prompt('your age'));

let currentDateAge = new Date();

currentDateAge.setFullYear(currentDateAge.getFullYear() - userAge);

document.write('Your age: ' +userAge);
document.write('<br>');
document.write('Your birth year is ' + currentDateAge.getFullYear());


document.write('<br>');
document.write('<br>');

// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

var units = 410;
var perUnitPrice = 16;
var lateCharge = 350;
var PriceWithInDueDate = units * perUnitPrice;
var priceAfterDueDate = PriceWithInDueDate + lateCharge;

document.write('<h1>K-ELECTRIC BILL</h1>');
document.write('<br>');
document.write('Customer Name: ABC CUSTOMER');
document.write('<br>');
document.write('Customer Month: '+ monthNames[currTime.getMonth()]);
document.write('<br>');
document.write('Number of Units: '+units);
document.write('<br>');
document.write('Charges per unit: '+perUnitPrice);
document.write('<br>');
document.write('Net Amount Payable (within Due Date): '+ PriceWithInDueDate);
document.write('<br>');
document.write('Late Payment Surcharge: '+lateCharge);
document.write('<br>');
document.write('Gross Amount Payable (after Due Date): '+priceAfterDueDate);
document.write('<br>');
document.write('<br>');




document.write('<br>');
document.write('<br>');