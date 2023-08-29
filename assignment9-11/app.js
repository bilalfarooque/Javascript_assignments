//1
// var city = prompt("Please write city name");
// console.log(city);

// if (city.toLowerCase() == "karachi"){
//     document.write ("Welcome to city of lights");
// }
// else{
//     document.write(city + ", is not a good place for traveling") ;
// }

//2
// var gender = prompt("what is your gender?");

// if (gender.toLowerCase() == "male" ){
//     document.write("Good Morning Sir");
// }else{
//     document.write("Good Morning Ma'am");
// }

//3
// var signal = prompt("what is the color of signal");
// if (signal.toLowerCase() === "red") {
//   document.write("Must Stop");
// } else if (signal.toLowerCase() ==="yellow") {
//   document.write("Ready to Move");
// } else if (signal.toLowerCase() ==="green") {
//   document.write("Go Ahead");
// }else{
//     document.write('Invalid color');
// }

//4
// var fuel = prompt("how much fuel is left?");

// if (+fuel <= 0.25){
//     document.write("Please refill the fuel in your car");
// }else{
//     document.write("Good to go ");
// }

// // 5a
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// } //true

// //5b
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }  //false

// 5c pehla true hone k bd baki sare true ignore honge
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }//true
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }//true

// // 5d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }//true

// // 5e
// if (true) {
//   alert("True");
// }

// if (false) {
//   alert("False");
// } //this is always unreachable due to false in if.

// // 5f
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// } //alphabatical high

//6
// var subject1 = prompt("Enter the name of Subject 1:");
// var subject2 = prompt("Enter the name of Subject 2:");
// var subject3 = prompt("Enter the name of Subject 3:");

// var totalMarks = 300;

// var obtainedMarksSubject1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
// var obtainedMarksSubject2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
// var obtainedMarksSubject3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

// var totalObtainedMarks = obtainedMarksSubject1 + obtainedMarksSubject2 + obtainedMarksSubject3;
// var percentage = (totalObtainedMarks / totalMarks) * 100;

// if(percentage < 60 ){
//   var grade = "Fail"
//   var remarks = "Sorry"
// }else if(percentage >=60 && percentage <=69){
//   var grade = "B"
//   var remarks = "You need to improve"
// }else if(percentage >=70 && percentage <=79){
//   var grade = "A"
//   var remarks = "Good"
// }
// else if(percentage >= 80){
//   var grade = "A-one"
//   var remarks = "Excellent"
// }

// document.write("<h1> Marks Sheet</h1>");
// document.write("<p>Total Marks : " + totalMarks + "</p>");
// document.write("<p>Marks Obtained : " + totalObtainedMarks + "</p>");
// document.write("<p>Percentage : " + percentage.toFixed(0) + "%</p>");
// document.write("<p>Grade : " + grade + "</p>");
// document.write("<p>Remarks : " + remarks + "</p>");

//7

// var secret = 8;
// var guess = +prompt("Guess the number from 1 to 10");

// if (secret === guess){
//   document.write("Bingo! Correct answer");
// }else if(++secret === guess || secret-2 === guess) {
//   document.write("Close enough to the answer");
// }
// else{
//   document.write('Wrong Answer');
// }

//8

// var number = prompt("Enter number to check for divisible by 3")
// var divisible = number%3;

// //using template literals to avoid concatenation
// if (divisible === 0 ){
//   document.write(`The Number ${number} is divisible by 3`)
// }else{
//   document.write(`The Number ${number} is not divisible by 3`)
// }

//9

// var  num1 = prompt("Enter number to check for even or odd");
// if((num1 % 2 == 0)){
//   document.write(`${num1} is an Even Number`);
// }else{
//   document.write(`${num1} is Odd Number`);
// }

//10

// var temp = prompt("What's the temperature outside")
// if (temp > 40){
//   document.write("It is too hot outside");
// }
// else if (temp > 30 && temp < 40){
//   document.write("The weather today is normal");
// }
// if (temp > 20 && temp < 30){
//   document.write("Today's weather is cool");
// }
// else if (temp < 20){
//     document.write("It is too cold outside");
// }

//11

// var fNum = +prompt("Enter first number");
// var sNum = +prompt("Enter second number");
// var operation = prompt("Enter operation to perform");
// if (operation === "addition" || operation === "+") {
//   document.write("Result of addition is " + (fNum + sNum));
// } else if (operation === "subtraction" || operation === "-") {
//   document.write("Result of subtraction is " + (fNum - sNum));
// } else if (operation === "multiplication" || operation === "*") {
//   document.write("Result of multiplication is " + fNum * sNum);
// } else if (operation === "division" || operation === "/") {
//   document.write("Result of division is " + fNum / sNum);
// } else if (operation === "modulus" || operation === "%") {
//   document.write("Result of modulus is " + (fNum % sNum));
// } 

// else if (operation === "exponentiation" || operation === "^") {
//   document.write("Result of exponentiation is " + Math.pow(fNum, sNum));
// } else if (operation === "factorial" || operation === "!") {
//   document.write(
//     "Result of factorial is " + Math.floor(Math.log(fNum) / Math.LN1)
//   );
// } else if (operation === "square root" || operation === "√") {
//   document.write("Result of square root is " + Math.sqrt(fNum));
// } else if (operation === "cube root" || operation === "∛") {
//   document.write("Result of cube root is " + Math.cbrt(fNum));
//   ln;
// } else if (operation === "natural logarithm" || operation === "ln") {
//   document.write("Result of natural logarithm is " + Math.log(fNum));
// } else if (operation === "common logarithm" || operation === "log10") {
//   document.write("Result of common logarithm is " + Math.log10(fNum));
// }
