// 1. Write a program that takes two user inputs for first and last name using 
//    prompt and merge them in a new variable titled fullName.
// Greet the user using his full name.

var firstName = prompt("Write your first name");
var lastName = prompt("Write your last name");
var fullName = firstName.toUpperCase() + ' ' + lastName.toUpperCase();
document.write('HELLO ' + fullName);


document.write('<br>');
document.write('<br>');
document.write('<br>');


// 2. Write a program to take a user input about his favorite mobile phone model. 
// Find and display the length of user input in your browser

var fvrtModel = prompt('Your favourite model');
document.write('My favourite phone is: ' + fvrtModel + '<br>' + 'Length of string.' + fvrtModel.length);

document.write('<br>');
document.write('<br>');


// 3. Write a program to find the index of letter “n” in the word “Pakistani” 
// and display the result in your browser .

var word = 'Pakistani'
document.write("String: " + word + "<br>" + "Index of 'n': " + word.indexOf('n'));

document.write('<br>');
document.write('<br>');

// 4. Write a program to find the last index of letter “l” in the word “Hello World” 
// and display the result in your browser.

var wordHello = 'Hello World'
document.write("String: " + wordHello + "<br>" + "Index of 'l': " + wordHello.lastIndexOf('l'));

document.write('<br>');
document.write('<br>');

// 5. Write a program to find the character at 3rd index in the
//  word “Pakistani” and display the result in your browser.

var wordfindonIndex = 'Pakistani'
document.write("String: " + wordfindonIndex + "<br>" + "Charater at index 3 : " + wordfindonIndex.charAt(3));

document.write('<br>');
document.write('<br>');


// 6. Repeat Q1 using string concat() method.

document.write(firstName.concat(lastName));

document.write('<br>');
document.write('<br>');


// 7. Write a program to replace the “Hyder” to “Islam” in 
// the word “Hyderabad” and display the result in your browser.

var cityName = 'Hyderabad';

document.write('City : ' + cityName);
document.write('<br>');
document.write('After Replacement : ' + cityName.replace('Hyder', 'Islam'));

document.write('<br>');
document.write('<br>');

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

var message = 'Ali and Sami are best friends. They play cricket and football together.';

document.write(message.replaceAll('and', '&'));

document.write('<br>');
document.write('<br>');

// 9. Write a program that converts a string “472” to a number 472.
//  Display the values & types in your browser.

var newVal = "472";
var newValNum = Number(newVal);
document.write('Value: ' + newVal);
document.write('<br>');
document.write('Type: ' + typeof newVal);
document.write('<br>');
document.write('Value: ' + newValNum);
document.write('<br>');
document.write('Type: ' + typeof newValNum);


document.write('<br>');
document.write('<br>');


// 10. Write a program that takes user input. 
// Convert and show the input in capital letters.

var usersmallInput = prompt('write in small');

document.write('User Input: ' + usersmallInput);
document.write('<br>');
document.write('UpperCase: ' + usersmallInput.toUpperCase());

document.write('<br>');
document.write('<br>');

// 11. Write a program that takes user input. 
// Convert and show the input in title case.

var usertitleInput = prompt('write in uper');

document.write('User Input: ' + usertitleInput);
document.write('<br>');
document.write('UpperCase: ' + usertitleInput.charAt(0).toUpperCase() + usertitleInput.slice(1));


document.write('<br>');
document.write('<br>');

// 12. Write a program that converts the variable num to string. var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser.

var newNum = 35.36;
document.write(newNum.toString().replace('.', ''));

document.write('<br>');
document.write('<br>');


// 13. Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], 
// prompt the user to enter a valid username. For character codes of [@ .
// Note: ASCII code of ! is 33 
//       ASCII code of , is 44 
//       ASCII code of . is 46 
//       ASCII code of @ is 64

var userName = prompt('tell me your user name');
if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
    alert("Invalid username! Please enter a valid username without @, ., ,, or !");
} else {
    document.write(userName);
}


document.write('<br>');
document.write('<br>');

// 14. You have an array 
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not.
//  Note: Perform case insensitive search. Whether the user enters
//   cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.
//    Example:


var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
var userChoice = prompt("what is your choice");
var itemFound = false;
for (i = 0; i < arr.length; i++) {
    if (arr[i] === userChoice.toLowerCase()) {
        document.write(userChoice + ' is availabe at index ' + i + ' in our bakery');
        itemFound = true;
        break;
    }
}
if (!itemFound) {
    document.write(userChoice + ' is not availabe in our bakery');
}

document.write('<br>');
document.write('<br>');


// 15. Write a program to take password as an input from user. 
// The password must qualify these requirements: 
// a. It should contain alphabets and numbers 
// b. It should not start with a number 
// c. It must at least 6 characters long If the password does not meet above requirements, 
// prompt the user to enter a valid password. For character codes of a-z, A-Z & 0-9, 
// refer to ASCII table at the end of this document.

function isValidPassword(password) {
    // Check if password is at least 6 characters long
    if (password.length < 6) {
        console.log("Password must be at least 6 characters long.");
        return false;
    }

    // Check if the first character is not a number
    if (!isNaN(password[0])) {
        console.log("Password should not start with a number.");
        return false;
    }

    // Check if the password contains at least one alphabet and one number
    let hasAlphabet = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let charCode = password.charCodeAt(i);

        // Check if the character is a letter (A-Z or a-z)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            hasAlphabet = true;
        }

        // Check if the character is a number (0-9)
        if (charCode >= 48 && charCode <= 57) {
            hasNumber = true;
        }

        // If both an alphabet and a number are found, break the loop
        if (hasAlphabet && hasNumber) {
            break;
        }
    }

    if (!hasAlphabet || !hasNumber) {
        console.log("Password must contain both alphabets and numbers.");
        return false;
    }

    // If all conditions are satisfied, return true
    return true;
}

function promptPassword() {
    let password = prompt("Enter a password:");

    while (!isValidPassword(password)) {
        password = prompt("Invalid password. Please enter a valid password:");
    }

    console.log("Password is valid!");
}

// Call the function to prompt the user for a password
promptPassword();

document.write('<br>');
document.write('<br>');

// 16. Write a program to convert the following string to an array using string 
// split method. var university = “University of Karachi”; 
// Display the elements of array in your browser.

var university = "University of Karachi";

var universityArray = university.split("");

for (var i = 0; i < universityArray.length; i++) {
    document.write(universityArray[i] + "<br>");
}


document.write('<br>');
document.write('<br>');


// 17. Write a program to display the last character of a user input.

var userInput = prompt("Enter a string:");

if (userInput && userInput.length > 0) {
    var lastCharacter = userInput.charAt(userInput.length - 1);

    document.write("The last character of the input is: " + lastCharacter);
} else {
    document.write("No input provided.");
}


document.write('<br>');
document.write('<br>');

// 18. You have a string “The quick brown fox jumps over the lazy dog”. 
// Write a program to count number of occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";

var lowerCaseSentence = sentence.toLowerCase();

var wordsArray = lowerCaseSentence.split(" ");

var count = 0;
for (var i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i] === "the") {
        count++;
    }
}

document.write('The word "the" appears ' + count + ' times in the sentence.');


document.write('<br>');
document.write('<br>');
