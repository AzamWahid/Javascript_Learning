// 1. Write a function that displays current date & time in your
// browser.

function displayDate() {
    var currDate = new Date();
    document.write(currDate);

    document.write('<br>');
    document.write('<br>');
}

displayDate();


// 2. Write a function that takes first & last name and then it
// greets the user using his full name.

function fullName(firstName, lastName) {

    document.write('Hello ' + firstName + ' ' + lastName);

    document.write('<br>');
    document.write('<br>');

}

fullName('Muhammad', 'Azam');

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

var firstNum = parseInt(prompt('first number'));
var secondNum = parseInt(prompt('Second number'));

function addNumbers(first, second) {

    return first + second;
}

var totals = addNumbers(firstNum, secondNum);
document.write('sum of ' + firstNum + ' & ' + secondNum + ' is ' + totals);

document.write('<br>');
document.write('<br>');

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

var num1 = parseInt(prompt('first Number'));
var num2 = parseInt(prompt('second Number'));
var operator = prompt('operator (+ , - , * , /)');

function calculator(pNum1, pNum2, pOperator) {

    switch (operator) {
        case '+':
            return pNum1 + pNum2;
        case '-':
            return pNum1 - pNum2;
        case '*':
            return pNum1 * pNum2;
        case '/':
            return pNum2 !== 0 ? (pNum1 / pNum2) : 0;
        default:
            return 'Invalid Value';
    }
}

var result = calculator(num1, num2, operator);
document.write('result of ' + num1 + operator + num2 + ' is ' + result);

document.write('<br>');
document.write('<br>');

// 5. Write a function that squares its argument.

function squareNum(sqNum) {

    document.write(sqNum * sqNum);
    document.write('<br>');
    document.write('<br>');
}
squareNum(6);

document.write('<br>');
document.write('<br>');

// 6. Write a function that computes factorial of a number.

function factorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i; // Multiply result by i in each iteration
    }
    return result;
}

document.write(factorial(5)); // Example usage, will return 120


document.write('<br>');
document.write('<br>');

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

let startNumber = parseInt(prompt("Enter the start number:"));
let endNumber = parseInt(prompt("Enter the end number:"));

function displayCounting(start, end) {
    let output = '';
    for (let i = start; i <= end; i++) {
        output += i + ' ';
    }
    return output;
}

document.write(displayCounting(startNumber, endNumber));


document.write('<br>');
document.write('<br>');

// 8. Write a nested function that computes hypotenuse of a
// right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

let base = parseFloat(prompt("Enter the Base:"));
let perpendicular = parseFloat(prompt("Enter the perpendicular:"));

function calculateHypotenuse(pBase, pPerpendicular) {
    // Inner function to calculate the square of a number
    function calculateSquare(num) {
        return num * num;
    }

    // Calculate the squares of the base and perpendicular
    const baseSquare = calculateSquare(pBase);
    const perpendicularSquare = calculateSquare(pPerpendicular);

    // Calculate the hypotenuse using the Pythagorean theorem
    const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);

    return hypotenuse;
}

let hypotenuse = calculateHypotenuse(base, perpendicular);
document.write(`The hypotenuse of the triangle is: ${hypotenuse}`);


document.write('<br>');
document.write('<br>');

// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

var width = 5;

function areaRectangle(pWidth, pHeight) {
    document.write('Area of rectangle ' + pWidth * pHeight);

    document.write('<br>');
    document.write('<br>');

}

areaRectangle(width, 9);

document.write('<br>');
document.write('<br>');

function isPalindrome(str) {
    // Convert the string to lowercase
    str = str.toLowerCase();

    // Initialize an empty string for the reversed version
    var reversedStr = '';

    // Build the reversed string
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    // Check if the original string is the same as the reversed string
    if (str === reversedStr) {
        return true; // It's a palindrome
    } else {
        return false; // It's not a palindrome
    }
}

// Example usage:
var inputString = prompt("Enter a string:");
if (isPalindrome(inputString)) {
    document.write('The string is a palindrome.');
} else {
    document.write('The string is not a palindrome.');
}

document.write('<br>');
document.write('<br>');

// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

function convertUpperCase(str) {
    document.write(str.slice(0, 1).toUpperCase() + str.slice(1, str.length));

}

convertUpperCase('the quick brown fox');


document.write('<br>');
document.write('<br>');

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function findLongestWord(str) {
    // Split the string into an array of words
    var words = str.split(' ');
    var longestWord = ''; // Variable to hold the longest word

    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }

    return longestWord; // Return the longest word found
}

// Example usage:
var inputString = 'Web Development Tutorial';
var longestWord = findLongestWord(inputString);
document.write('The longest word is:', longestWord);


document.write('<br>');
document.write('<br>');

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of
// function | JAVASCRIPT
// Page 3 of 4
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

function countLetterOccurrences(str, letter) {
    var count = 0; // Initialize a counter to zero

    for (var i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++; // Increment the counter
        }
    }

    return count;
}

var inputString = 'JSResourceS.com';
var letterToCount = 'o';
var occurrences = countLetterOccurrences(inputString, letterToCount);
document.write(`The letter '${letterToCount}' occurs ${occurrences} time(s) in the string.`);


document.write('<br>');
document.write('<br>');

// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

function calcCircumference(radius) {
    var circumference = 2 * Math.PI * radius; // Calculate circumference
    document.write("The circumference is " + circumference.toFixed(2)); // Output the result
    document.write('<br>');
}

function calcArea(radius) {
    var area = Math.PI * radius * radius; // Calculate area
    document.write("The area is " + area.toFixed(2)); // Output the result
    document.write('<br>');
}

var radius = 5; // Define the radius
calcCircumference(radius); // Calculate and display circumference
calcArea(radius); // Calculate and display area


document.write('<br>');
document.write('<br>');


