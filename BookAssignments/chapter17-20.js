// // 1. Declare and initialize an empty multidimensional array. (Array of arrays)

// let multiArray = [
//     [], // First row (empty)
//     [], // Second row (empty)
//     []  // Third row (empty)
// ];


// //   2. Declare and initialize a multidimensional array representing the 
// //   following matrix:

// multiArray[0][0] = 0;
// multiArray[0][1] = 1;
// multiArray[0][2] = 2;
// multiArray[0][3] = 3;
// multiArray[1][0] = 1;
// multiArray[1][1] = 0;
// multiArray[1][2] = 1;
// multiArray[1][3] = 2;
// multiArray[2][0] = 2;
// multiArray[2][1] = 1;
// multiArray[2][2] = 0;
// multiArray[2][3] = 1;

// // document.write(multiArray);
// // Display each element manually
// document.write(multiArray[0][0]);
// document.write(multiArray[0][1]);
// document.write(multiArray[0][2]);
// document.write(multiArray[0][3] + "<br>");
// document.write(multiArray[1][0]);
// document.write(multiArray[1][1]);
// document.write(multiArray[1][2]);
// document.write(multiArray[1][3] + "<br>");
// document.write(multiArray[2][0]);
// document.write(multiArray[2][1]);
// document.write(multiArray[2][2]);
// document.write(multiArray[2][3] + "<br>");

// document.write('<br>');
// document.write('<br>');

// // 3. Write a program to print numeric counting from 1 to 10.

// for (i = 1; i <= 10; i++) {
//     document.write(i + '<br>');
// }
// document.write('<br>');
// document.write('<br>');

// // 4. Write a program to print multiplication table of any number using for loop.
// // Table number & length should be taken as an input from user.

// let tableNo = +prompt("Enter a number to show its multiplication table");
// let tableLength = +prompt("Enter a length multiplication table");

// document.write('multiplication table of ' + tableNo + '<br>');
// document.write('Length ' + tableLength + '<br>');

// for (i = 1; i <= tableLength; i++) {
//     document.write(tableNo + ' x ' + i + ' = ' + tableNo * i + ' <br>');
// }
// document.write('<br>');
// document.write('<br>');


// // 5. Write a program to print items of the following array using 
// // for loop: 
// let fruits = ['apple', 'banana', 'mango', 'orange', 'strawberry'];

// for (i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + '<br>');
// }
// document.write('<br>');
// document.write('<br>');

// for (i = 0; i < fruits.length; i++) {
//     document.write('Element at index ' + i + ' ' + fruits[i] + '<br>');
// }

// document.write('<br>');
// document.write('<br>');

// // 6. Generate the following series in your browser.See example 
// // output.a.Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// // b.Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// // c.Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 
// // d.Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
// // e.Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write('Counting <br>');

// for (i = 0; i <= 15; i++) {
//     document.write(i + ', ');
// }
// document.write('<br>');
// document.write('<br>');

// document.write('Reverse Counting <br>');
// for (i = 10; i >= 1; i--) {
//     document.write(i + ', ');
// }
// document.write('<br>');
// document.write('<br>');

// document.write('Even: <br>');
// for (i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + ', ');
//     }
// }
// document.write('<br>');
// document.write('<br>');

// document.write('Odd: <br>');
// for (i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         document.write(i + ', ');
//     }
// }

// document.write('<br>');
// document.write('<br>');

// document.write('Series: <br>');
// for (i = 0; i <= 20; i++) {
//     if (i % 2 === 0) {
//         document.write(i + 'k, ');
//     }
// }

// document.write('<br>');
// document.write('<br>');



// // 7. You have an array 
// // A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// // Write a program to enable “search by user input” in an array.
// // After searching, prompt the user whether the given item is found in the list or not.
// // Example:
// let cookieName = prompt('Welcome to ABC Bakery what you want to order sir/madam');
// let cookies = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// let cookFound = false;
// for (i = 0; i < cookies.length; i++) {
//     if (cookies[i] === cookieName) {
//         document.write(cookies[i] + ' is available at index ' + i + ' in our bakery');
//         cookFound = true;
//         break;
//     }
// }
// if (cookFound === false) {
//     document.write('we are sorry ' + cookieName + ' is not availble in our bakery');
// }

// if (cookFound === false) { }

// document.write('<br>');
// document.write('<br>');

// // 8. Write a program to identify the largest number in the given array. 
// largeArray = [24, 53, 78, 91, 12];
// let largest = largeArray[0];
// for (i = 0; i < largeArray.length; i++) {
//     if (largeArray[i] > largest) {
//         largest = largeArray[i];
//     }
// }
// document.write('largest number is ' + largest);
// document.write('<br>');
// document.write('<br>');

// // 9. Write a program to identify the smallest number in the given array.
// smallArray = [24, 53, 78, 91, 12]
// let smallest = smallArray[0];
// for (i = 0; i < smallArray.length; i++) {
//     if (smallArray[i] < smallest) {
//         smallest = smallArray[i];
//     }
// }
// document.write('Samllest number is ' + smallest);
// document.write('<br>');
// document.write('<br>');

// // 10. Write a program to print multiples of 5 ranging 1 to 100.

// for (i = 1; i <= 20; i++) {
//     document.write(i * 5 + ', ');
// }


// document.write('<br>');
// document.write('<br>');
