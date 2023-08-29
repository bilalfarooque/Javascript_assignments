//1
var a = 10;
document.write("Result: <br>");
document.write("The value of a is: " + a, "<br>");
document.write("..................................................<br><br>");
document.write("The value of a is: " + ++a, "<br>");
document.write("Now the value of a is: " + a, "<br><br>");
document.write("The value of a is: " + a++, "<br>");
document.write("Now the value of a is: " + a, "<br><br>");
document.write("The value of a is: " + --a, "<br>");
document.write("Now the value of a is: " + a, "<br><br>");
document.write("The value of a is: " + a--, "<br>");
document.write("Now the value of a is: " + a, "<br><br>");

//2
var a = 2;
var b = 1;
document.write("The value of a is: " + a, "<br>");
document.write("The value of b is: " + b, "<br><br>");
var result = --a - --b + ++b + b--;
1 - 0 + 1 + 1;
document.write("Result: " + result, "<br><br>");

//3
// var name2 = prompt("What's your name");
// document.write("Hi "+ name2 + "<br>");

//4

//5
// var num5 = 5;
// var num5 = prompt("Please enter a number");
// var i = 1;
// document.write("Table of "+num5,"<br>\n");
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" );
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" );
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" );
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" );
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" );
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" );
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" );
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" );
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" );
// document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n","<br>\n" );

//6

var subject1 = prompt("Enter the name of Subject 1:");
var subject2 = prompt("Enter the name of Subject 2:");
var subject3 = prompt("Enter the name of Subject 3:");

var totalMarks = 100;

var obtainedMarksSubject1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
var obtainedMarksSubject2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarksSubject3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;


document.write("<h1> Marks Sheet</h1>");
document.write("<table border='1' padding='3'>");
document.write(
  "<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>"
);
document.write(
  "<tr><td>" +subject1 +"</td><td>" +totalMarks +"</td><td>" + obtainedMarksSubject1 +"</td></tr>");
document.write("<tr><td>" +subject2 +"</td><td>" +totalMarks +"</td><td>" +obtainedMarksSubject2 +"</td></tr>");
document.write("<tr><td>" +subject3 +"</td><td>" +totalMarks +"</td><td>" +obtainedMarksSubject3 +"</td></tr>");
document.write("</table>");

document.write("<p>Total Marks Obtained: " + totalObtainedMarks + "/300</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
