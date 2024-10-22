// 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.

function power(a, b) {
    let result = 1;
    for (let i = 0; i < b; i++) {
        result = result * a;
    }
    return result;
}

let a = 2;
let b = 5;
console.log(power(a, b));  

// 2. Any year is entered through the keyboard. 
// Write a function to determine whether the year is a leap year or not.

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true; // Leap year
    } else if (year % 100 === 0) {
        return false; // Not a leap year
    } else if (year % 4 === 0) {
        return true; // Leap year
    } else {
        return false; // Not a leap year
    }
}

let year = 2024;
console.log(isLeapYear(year));  // Output: true (since 2024 is a leap year)


// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

function calculateTriangleArea(a, b, c) {
    // Step 1: Calculate semi-perimeter S
    let S = (a + b + c) / 2;

    // Step 2: Use Heron's formula to calculate area
    let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));

    return area;
}

let SidaA = 5;
let SidaB = 6;
let SidaC = 7;

let area = calculateTriangleArea(SidaA, SidaB, SidaC);
console.log("Area of the triangle:", area); // Output: Area of the triangle: 14.6969...


// 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction and other are for average and percentage. 
// Call those functions from mainFunction and display result in mainFunction.

// Function to calculate the average of marks
function calculateAverage(marks) {
    let totalMarks = marks.reduce((sum, mark) => sum + mark, 0); // Sum up all the marks
    return totalMarks / marks.length; // Return average
}

// Function to calculate the percentage of marks
function calculatePercentage(marks, totalMarksPerSubject) {
    let totalObtained = marks.reduce((sum, mark) => sum + mark, 0); // Sum up all the marks
    let totalMarks = totalMarksPerSubject * marks.length; // Calculate the total possible marks
    return (totalObtained / totalMarks) * 100; // Return percentage
}

// Main function to get marks, calculate average, and percentage
function mainFunction() {
    // Example marks received in 3 subjects (you can modify these values)
    let marks = [80, 90, 75]; // Marks in 3 subjects
    let totalMarksPerSubject = 100; // Assume each subject has 100 as maximum marks

    // Call functions to calculate average and percentage
    let average = calculateAverage(marks);
    let percentage = calculatePercentage(marks, totalMarksPerSubject);

    // Display the results
    console.log("Average Marks: " + average);
    console.log("Percentage: " + percentage + "%");
}

// Call the main function
mainFunction();
