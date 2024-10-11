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
document.write('My favourite phone is: '+fvrtModel+'<br>'+'Length of string.'+fvrtModel.length);

document.write('<br>');
document.write('<br>');


// 3. Write a program to find the index of letter “n” in the word “Pakistani” 
// and display the result in your browser .

var word = 'Pakistani'
document.write("String: "+word + "<br>"+"Index of 'n': "+ word.indexOf('n'));

document.write('<br>');
document.write('<br>');

// 4. Write a program to find the last index of letter “l” in the word “Hello World” 
// and display the result in your browser.

var wordHello = 'Hello World'
document.write("String: "+wordHello + "<br>"+"Index of 'l': "+ wordHello.lastIndexOf('l'));

document.write('<br>');
document.write('<br>');

// 5. Write a program to find the character at 3rd index in the
//  word “Pakistani” and display the result in your browser.

var wordfindonIndex = 'Pakistani'
document.write("String: "+wordfindonIndex + "<br>"+"Charater at index 3 : "+ wordfindonIndex.charAt(3));

document.write('<br>');
document.write('<br>');


// 6. Repeat Q1 using string concat() method.

document.write(firstName.concat(lastName));

document.write('<br>');
document.write('<br>');


// 7. Write a program to replace the “Hyder” to “Islam” in 
// the word “Hyderabad” and display the result in your browser.

var cityName = 'Hyderabad';

document.write('City : '+cityName);
document.write('<br>');
document.write('After Replacement : '+cityName.replace('Hyder','Islam'));

document.write('<br>');
document.write('<br>');

// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser. 
// var message = “Ali and Sami are best friends. They play cricket and football together.”;

var message = 'Ali and Sami are best friends. They play cricket and football together.';

document.write(message.replaceAll('and','&'));

document.write('<br>');
document.write('<br>');

// 9. Write a program that converts a string “472” to a number 472.
//  Display the values & types in your browser.

var newVal = "472";
var newValNum = Number(newVal);
document.write('Value: '+ newVal);
document.write('<br>');
document.write('Type: '+  typeof newVal);
document.write('<br>');
document.write('Value: '+ newValNum);
document.write('<br>');
document.write('Type: '+  typeof newValNum);


document.write('<br>');
document.write('<br>');


// 10. Write a program that takes user input. 
// Convert and show the input in capital letters.

var usersmallInput = prompt('write in small');

document.write('User Input: '+usersmallInput);
document.write('<br>');
document.write('UpperCase: '+usersmallInput.toUpperCase());

document.write('<br>');
document.write('<br>');

// 11. Write a program that takes user input. 
// Convert and show the input in title case.

var usertitleInput = prompt('write in small');

document.write('User Input: '+usertitleInput);
document.write('<br>');
document.write('UpperCase: '+usertitleInput.charAt(0).toUpperCase()+usertitleInput.slice(1));


document.write('<br>');
document.write('<br>');

// 12. Write a program that converts the variable num to string. var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser.

var newNum = 35.36;
document.write(newNum.toString().replace('.',''));

document.write('<br>');
document.write('<br>');
