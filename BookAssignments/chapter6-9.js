// // 1

// var num = 10;

// document.write('Result:<br>');
// document.write('The value of a is: ' + num + '<br>');
// document.write("---------------<br>");

// document.write('The value of ++a is: ' + ++num + '<br>');
// document.write('Now the value of a is ' + num + '<br>');

// document.write("<br>");

// document.write('The value of a++ is ' + num++ + '<br>');
// document.write('Now the value of a is ' + num + '<br>');

// document.write("<br>");

// document.write('The value of --a is: ' + --num + '<br>');
// document.write('Now the value of a is ' + num + '<br>');

// document.write("<br>");

// document.write('The value of a-- is ' + num-- + '<br>');
// document.write('Now the value of a is ' + num + '<br>');

// document.write("<br>");

// //2

// var a = 2; b = 1;
// var result = --a - --b + ++b + b--;

// // document.write('--a: a is 1 & b is 1'+ '<br>');
// // document.write('now check a is '+a + ' ' + 'now check b is '+b+ '<br>');
// // document.write('--a - --b: a is 1 and b is 0'+ '<br>');
// // document.write('now check a is '+a + ' ' + 'now check b is '+b+ '<br>');
// // document.write('--a  --b: a is 0 and b is 0'+ '<br>');
// // document.write('now check a is '+a + ' ' + 'now check b is '+b+ '<br>');

// document.write('result is ' + result + '<br>')
// document.write('<br>')


// //3

// var userName = prompt("What is your name");
// alert("Hello " + userName);


// //5

// var number = 5;
// number = +prompt("Please tell number for table")
// if (number == 0) { number = 5 }
// document.write(number + "* 1 = " + number * 1 + "<br>")
// document.write(number + "* 2 = " + number * 2 + "<br>")
// document.write(number + "* 3 = " + number * 3 + "<br>")
// document.write(number + "* 4 = " + number * 4 + "<br>")
// document.write(number + "* 5 = " + number * 5 + "<br>")
// document.write(number + "* 6 = " + number * 6 + "<br>")
// document.write(number + "* 7 = " + number * 7 + "<br>")
// document.write(number + "* 8 = " + number * 8 + "<br>")
// document.write(number + "* 9 = " + number * 9 + "<br>")
// document.write(number + "* 10 = " + number * 10 + "<br>")

// document.write('<br>')
// document.write('<br>')

// //6

// var firstSub = prompt("First Subject Name");
// var secondSub = prompt("Second Subject Name");
// var thirdSub = prompt("Third Subject Name");

// totalMarkEachSub = 100;

// var firstSubMark = +prompt("First Subject Marks");
// var secondSubMark = +prompt("Second Subject Marks");
// var thirdSubMArk = +prompt("Third Subject Marks");

// var firstSubPer = (firstSubMark / totalMarkEachSub) * 100;
// var SecondSubPer = (secondSubMark / totalMarkEachSub) * 100;
// var ThirdSubPer = (thirdSubMArk / totalMarkEachSub) * 100;

// TotalObtain = firstSubMark+secondSubMark+thirdSubMArk;
// Totalmarks = totalMarkEachSub*3;
// TotalPer = (TotalObtain / Totalmarks) * 100;

// document.write('<table border="1">');
// // Header row
// document.write('<tr>');
// document.write('<th>Subject</th>');
// document.write('<th>Total Marks</th>');
// document.write('<th>Obtained</th>');
// document.write('<th>Percentage</th>');
// document.write('</tr>');

// document.write('<tr><td>' + firstSub + '</td><td>' + totalMarkEachSub + '</td><td>' + firstSubMark + '</td><td>' + firstSubPer + '</td></tr>');
// document.write('<tr><td>' + secondSub + '</td><td>' + totalMarkEachSub + '</td><td>' + secondSubMark + '</td><td>' + SecondSubPer + '</td></tr>');
// document.write('<tr><td>' + thirdSub + '</td><td>' + totalMarkEachSub + '</td><td>' + thirdSubMArk + '</td><td>' + ThirdSubPer + '</td></tr>');

// document.write('<tr>');
// document.write('<th></th>');
// document.write('<th>'+Totalmarks+'</th>');
// document.write('<th>'+TotalObtain+'</th>');
// document.write('<th>'+TotalPer+'</th>');
// document.write('</tr>');

// document.write('</table>');

// document.write('<br>')
// document.write('<br>')
// document.write('<br>')
