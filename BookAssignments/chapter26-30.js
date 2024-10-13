// 1. Write a program that takes a positive integer from user & display the following 
// in your browser. 
// a. number 
// b. round off value of the number
//  c. floor value of the number 
//  d. ceil value of the number

var useNum = parseFloat(prompt('give number'));
document.write('number : ' + useNum);
document.write('<br>');
document.write('round of value : ' + Math.round(useNum));
document.write('<br>');
document.write('floor value : ' + Math.floor(useNum));
document.write('<br>');
document.write('ceil value : ' + Math.ceil(useNum));


document.write('<br>');
document.write('<br>');

// 2. Write a program that takes a negative floating point number from user & display 
// the following in your browser.
// a. number 
// b. round off value of the number 
// c. floor value of the number 
// d. ceil value of the number

var useNegNum = parseFloat(prompt('give neagtive number'));
document.write('number : ' + useNegNum);
document.write('<br>');
document.write('round of value : ' + Math.round(useNegNum));
document.write('<br>');
document.write('floor value : ' + Math.floor(useNegNum));
document.write('<br>');
document.write('ceil value : ' + Math.ceil(useNegNum));


document.write('<br>');
document.write('<br>');

// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5


var numabs = -4;
document.write('The absolute of ' + numabs + ' is ' + Math.abs(numabs));

document.write('<br>');
document.write('<br>');


// 4. Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.


var randomNumber = Math.floor(Math.random() * 6) + 1;
document.write("Random number between 1 and 6 is: " + randomNumber);


document.write('<br>');
document.write('<br>');


// 5. Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser

var randomToss = Math.floor(Math.random() * 2) + 1;
document.write(randomToss);
document.write('<br>');
document.write('ranodm coin value : ' + (randomToss == 1 ? 'Tails' : 'Heads'));


document.write('<br>');
document.write('<br>');

// 6. Write a program that shows a random number between 1 and 100 in your browser.

var randomNumber1TO100 = Math.floor(Math.random() * 100) + 1;
document.write("Random number between 1 and 100 is: " + randomNumber1TO100);


document.write('<br>');
document.write('<br>');

// 7. Write a program that asks the user about his weight. 
// Parse the user input and display his weight in your browser. Possible user inputs can be: 
// a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms
var weight = parseFloat(prompt("weight"));

if (!isNaN(weight)) {
    document.write("Your weight is: " + weight + " kg");
} else {
    document.write("Invalid input. Please enter a valid weight.");
}

document.write('<br>');
document.write('<br>');


// 8. Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. 
// If the user input equals the secret number, congratulate the user.

var secretRandom = Math.floor(Math.random() * 10) + 1;
var userChoose = parseInt(prompt('tell secret number between 1 to 10'));
document.write('secret number ' + secretRandom);
document.write('<br>');

if (secretRandom === userChoose) {
    document.write('wow good');
} else {
    document.write('try again');
}

document.write('<br>');
document.write('<br>');
