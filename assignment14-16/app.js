//1-6

// var arr1 = [];
// var arr2 = {};
// var arr3 = ['bilal','faisal','ahmed'];
// var arr4 = [1,2,3,4,5];
// var arr5 = [true,false,true];
// var arr6 = [5, true, false, 'bilal'];

// //7

// var degree = ['SSC', 'HSC','BCS', 'BS', 'BCOM', 'MS','M.PHIL', 'PHD'];

//8

// Initialize arrays to store student names and scores
// var studentNames = [];
// var studentScores = [];

// // Function to calculate percentage
// function calculatePercentage(score) {
//     var totalMarks = 500;
//     var percentage = (score / totalMarks) * 100;
//     return percentage.toFixed(2);
// }

// // Input student names and scores
// for (var i = 0; i < 3; i++) {
//     var names = prompt("Enter student " + (i+1) + " name:");
//     var score = parseInt(prompt("Enter " + names + "'s score:"));
//     studentNames.push(names);
//     studentScores.push(score);
// }

// // Display scores and percentages
// document.write("\nStudent Scores and Percentages: <br>");
// for (var i = 0; i < 3; i++) {
//     document.write("Score of  "+studentNames[i]+ " is " + + studentScores[i] + ", Percentage: " + calculatePercentage(studentScores[i]) + "% \n <br>");
// }

//9

// let colors = ['red', 'blue', 'green'];
// document.write(colors + '<br>');

// let addSColor = prompt("Enter the color to add in beginning");
// colors.unshift(addSColor);
// document.write(colors + '<br>');

// let addEColor = prompt("Enter the color to add in end");
// colors.push(addEColor);
// document.write(colors + '<br>');

// colors.splice(0,0, 'grey', 'purple');
// document.write(colors + '<br>');

// colors.shift();
// document.write(colors + '<br>');

// colors.pop();
// document.write(colors + '<br>');

// let addPColor = prompt("Enter the color to add");
// let addPos = prompt("Enter the position");
// colors.splice(addPos-1,0, addPColor);
// document.write(colors + '<br>');

// let addPositions = prompt("Enter the position to delete colors");
// let remColors = prompt("Enter the number of colors to delete");
// colors.splice(addPositions-1,remColors,);
// document.write(colors + '<br>');

//10

// var students = [320,230,480,120];
// document.write(students.sort());

//11
// var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];
// document.write("Cities list " + cities + "<br>");

// var selectedCities = cities.slice(2,4); //index 2 included 4 not included
// document.write("selected cities are " + selectedCities + "<br>" );

//12

// var arr = ["This", "is", "my", "cat"];
// var arrJoin = arr.join(" ");
// document.write("String: "+ arrJoin);

//13

// var devices = [];
// var inputs = ["keyboard", "mouse", "printer", "monitor"];

// for( let i = 0; i< inputs.length; i++){
//     document.write( "in <br> "+devices.unshift(inputs[i])+ "<br>");
// }

// for( let i = 0; i< inputs.length; i++){
//     document.write( "out <br> "+devices.pop()+ "<br>");
// }

//14

// var devices = [];
// var inputs = ["keyboard", "mouse", "printer", "monitor"];

// for( let i = 0; i< inputs.length; i++){
//     document.write( "in <br> "+devices.unshift(inputs[i])+ "<br>");
// }

// for( let i = 0; i< inputs.length; i++){
//     document.write( "out <br> "+devices.shift()+ "<br>");
// }

15

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select id='manufacturer'> ");

 // Loop through the array to create the options
   for (var i = 0; i < manufacturers.length; i++) {
    document.write('<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>');
  }

  // Close the select menu
  document.write('</select>');


