// 1. Declare an empty array using JS literal notation to store
// student names in future

let students = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

let studentNames = new Array();

// 3. Declare and initialize a strings array

let stringArray = ['azam','zubair','sameer'];

// 4. Declare and initialize a numbers array

let nummArray = [1,5,7,6];

// 5. Declare and initialize a boolean array.

let boolArray = [true , false];

// 6. Declare and initialize a mixed array.

let mixArray = ['azam',5,true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

let avalableDegree = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil', 'PhD'];
document.write('Qualifications: '+ '<br>');
document.write('1) ' + avalableDegree[0] + '<br>');
document.write('1) ' + avalableDegree[0] + '<br>');
document.write('2) ' + avalableDegree[1] + '<br>');
document.write('3) ' + avalableDegree[2] + '<br>');
document.write('4) ' + avalableDegree[3] + '<br>');
document.write('5) ' + avalableDegree[4] + '<br>');
document.write('6) ' + avalableDegree[5] + '<br>');
document.write('7) ' + avalableDegree[6] + '<br>');
document.write('8) ' + avalableDegree[7] + '<br>');

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

let schoolStudents = ['Michael','John','Tony'];
let studentsMarks = [320,230,480];

document.write('Score of '+schoolStudents[0] + ' is '+ studentsMarks[0]+'. Percentage: '+(studentsMarks[0] / 500) * 100 +'% <br>');
document.write('Score of '+schoolStudents[1] + ' is '+ studentsMarks[1]+'. Percentage: '+(studentsMarks[1] / 500) * 100 +'% <br>');
document.write('Score of '+schoolStudents[2] + ' is '+ studentsMarks[2]+'. Percentage: '+(studentsMarks[2] / 500) * 100 +'% <br>');
document.write('<br>');
document.write('<br>');
document.write('<br>');

// 9. Initialize an array with color names. Display the array
// elements in your browser.

let colors = ['blue','black','orange','brown'];
document.write(colors + ' <br>');

// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

let userChoiceColor = prompt('which colur you want to add at beginning?');
colors.unshift(userChoiceColor);
document.write(colors + ' <br>');

document.write('<br>');
document.write('<br>');


// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.

let userChoiceColorEnd = prompt('which colur you want to add at end?');
colors.push(userChoiceColorEnd);
document.write(colors + ' <br>');

document.write('<br>');
document.write('<br>');

// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colors.unshift('Pink','green');
document.write(colors + ' <br>');

document.write('<br>');
document.write('<br>');

// d. Delete the first color in the array. Display the updated
// array in your browser.

colors.shift();
document.write(colors + ' <br>');

document.write('<br>');
document.write('<br>');

// e. Delete the last color in the array. Display the updated
// array in your browser

colors.pop();
document.write(colors + ' <br>');

document.write('<br>');
document.write('<br>');

// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser

let colorIndex = +prompt('In which index you want to add');
let colorName = prompt('which colur you want to add at this index');

colors.splice(colorIndex,0,colorName);

document.write(colors + ' <br>');

document.write('<br>');
document.write('<br>');

// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

let colorIndexDelete = +prompt('In which index you want to delete');
let colorDeleteCount = +prompt('how many color you want to delete');

colors.splice(colorIndex,colorDeleteCount);

document.write(colors + ' <br>');

document.write('<br>');
document.write('<br>');


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

let studentScore = [150,90,70,120,500];

document.write('Scores of students :'+studentScore + ' <br>');
document.write('Ordered Scores of students: '+ studentScore.sort((a, b) => a - b) + ' <br>');

document.write('<br>');
document.write('<br>');

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

let cities = ['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
document.write('Cities List :' + ' <br>');
document.write(cities + ' <br>');
document.write('<br>');
document.write('<br>');
document.write('Selected Cities List :' + ' <br>');
document.write(cities.slice(2,4) + ' <br>');
document.write('<br>');
document.write('<br>');


// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ['This ','is ', 'my ', 'cat'];
document.write('Array :' + ' <br>');
document.write(arr + ' <br>');
document.write('<br>');
document.write('String :' + ' <br>');
document.write(arr.join('') + ' <br>');
document.write('<br>');
document.write('<br>');


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

let accesorriesArray = [];
accesorriesArray.push('keyboard','mouse','printer','monitor');
document.write('Devices :' + ' <br>');
document.write(accesorriesArray + ' <br>');
document.write('<br>');
document.write('Out :' + ' <br>');
document.write(accesorriesArray.shift() + ' <br>');
document.write('<br>');
document.write('Out :' + ' <br>');
document.write(accesorriesArray.shift() + ' <br>');
document.write('<br>');
document.write('Out :' + ' <br>');
document.write(accesorriesArray.shift() + ' <br>');
document.write('<br>');
document.write('Out :' + ' <br>');
document.write(accesorriesArray.shift() + ' <br>');
document.write('<br>');
document.write('<br>');


// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

accesorriesArray.push('keyboard','mouse','printer','monitor');
document.write('Devices :' + ' <br>');
document.write(accesorriesArray + ' <br>');
document.write('<br>');
document.write('Out :' + ' <br>');
document.write(accesorriesArray.pop() + ' <br>');
document.write('<br>');
document.write('Out :' + ' <br>');
document.write(accesorriesArray.pop() + ' <br>');
document.write('<br>');
document.write('Out :' + ' <br>');
document.write(accesorriesArray.pop() + ' <br>');
document.write('<br>');
document.write('Out :' + ' <br>');
document.write(accesorriesArray.pop() + ' <br>');
document.write('<br>');
document.write('<br>');


// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method

let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write('<select>');
document.write('<option value="Apple">'+phoneManufacturers[0]+'</option>');
document.write('<option value="Samsung">'+phoneManufacturers[1]+'</option>');
document.write('<option value="Motorola">'+phoneManufacturers[2]+'</option>');
document.write('<option value="Nokia">'+phoneManufacturers[3]+'</option>');
document.write('<option value="Sony">'+phoneManufacturers[4]+'</option>');
document.write('<option value="Haier">'+phoneManufacturers[5]+'</option>');
document.write('</select>');
document.write('<br>');
document.write('<br>');
