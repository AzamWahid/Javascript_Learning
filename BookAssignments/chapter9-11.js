//1
var city = prompt("Name of your city");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of light");
}


//2
var gender = prompt("what is your gender");

if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
}
else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
}
else {
    alert("dafa hojao");
}

//3

var singleColor = prompt("Tell me current traffic signal colour");

if (singleColor.toLocaleLowerCase() === "red") {
    alert("Must Stop");
}
else if (singleColor.toLocaleLowerCase() === "yellow") {
    alert("ready to move");
}
else if (singleColor.toLocaleLowerCase() === "green") {
    alert("Move now");
}
else {
    alert("bhagoooo");
}

//4
var fuelliter = +prompt("how much fuel left");
if (fuelliter < 0.25) {
    alert("please refill fuel in your car");
}
else {
    alert("relax ho ke jao");
}


//5
//a
var a = 4;
if (++a === 5) {
    alert("given condition fo variable is true")
}

//b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

//c 
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c-- === 14) {
    alert("condition 4 is true");
}

//d

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("the cost equal");
}

//e

if (true) {
    alert("true");
}
if (false) {
    alert("false");
}

//f

if ("car" < "cat") {
    alert("car is smaller then cat")
}


//6
var markObtain = +prompt("please tell me total marks obtain in three subject");
var totalMarks = +prompt("please tell me total marks of three subject");
var per = (markObtain / totalMarks) * 100;
var grade, remarks;
if (per >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (per >= 70) {
    grade = "A";
    remarks = "Good";
} else if (per >= 60) {
    grade = "B";
    remarks = "You Need to improve";
} else if (per < 60) {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<br>");
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total Marks : " + totalMarks + "<br>");
document.write("Marks Obtain : " + markObtain + "<br>");
document.write("Percentage : " + per + "<br>");
document.write("Grade : " + grade + "<br>");
document.write("Remarks : " + remarks + "<br>");
document.write("<br>");
document.write("<br>");
document.write("<br>");


//7

var secret = 6;
var usertell = +prompt("tell me a secret number");
if (usertell == 6) {
    alert("Bingo! Correct answer");
}
if (usertell == 6 + 1) {
    alert("close enough to the correct answer");
}

//8
var div3num = +prompt("tell me a number");
if (div3num % 3 === 0) {
    alert(div3num + " number is divisible by 3");
}


//9
var evenodd = +prompt("tell even or odd number");
if (evenodd % 2 === 0) {
    alert(evenodd + " is even number")
}
else if (evenodd % 2 !== 0) {
    alert(evenodd + " is odd number")
}

//10
var temp = +prompt("tell me temperature");
if (temp > 40) {
    alert("It is too hot outside");
} else if (temp > 30) {
    alert("the weather today is normal");
}else if (temp > 20) {
    alert("today weather is cool");
}else if (temp > 10) {
    alert("OMG! Today's weather is so cool");
}


//11

var firstnumber = +prompt("first number");
var secondnumber = +prompt("second number");
var operator = prompt("select operatoe (+,-,*,/,%)");

var result
if (operator === "+") {
    result = firstnumber+secondnumber
} else if (operator === "-") {
    result = firstnumber-secondnumber
} else if (operator === "*") {
    result = firstnumber*secondnumber
} else if (operator === "/") {
    result = firstnumber/secondnumber
} else if (operator === "%") {
    result = firstnumber%secondnumber
}
alert(result);






