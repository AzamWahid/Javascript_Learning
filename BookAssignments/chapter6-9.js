// 1

var num = 10;

document.write('Result:<br>');
document.write('The value of a is: '+ num+'<br>');
document.write("---------------<br>");

document.write('The value of ++a is: '+ ++num+'<br>');
document.write('Now the value of a is '+ num+'<br>');

document.write("<br>");

document.write('The value of a++ is '+ num++ +'<br>');
document.write('Now the value of a is '+ num+'<br>');

document.write("<br>");

document.write('The value of --a is: '+ --num+'<br>');
document.write('Now the value of a is '+ num+'<br>');

document.write("<br>");

document.write('The value of a-- is '+ num-- +'<br>');
document.write('Now the value of a is '+ num+'<br>');

document.write("<br>");

//2

var a = 2; b = 1;
var result = --a - --b + ++b + b--;

// document.write('--a: a is 1 & b is 1'+ '<br>');
// document.write('now check a is '+a + ' ' + 'now check b is '+b+ '<br>');
// document.write('--a - --b: a is 1 and b is 0'+ '<br>');
// document.write('now check a is '+a + ' ' + 'now check b is '+b+ '<br>');
// document.write('--a  --b: a is 0 and b is 0'+ '<br>');
// document.write('now check a is '+a + ' ' + 'now check b is '+b+ '<br>');

document.write('result is ' + result + '<br>')