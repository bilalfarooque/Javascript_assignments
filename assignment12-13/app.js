//1
// var num1 = prompt("Enter number to get ascii code");

// document.write(
//   `the ascii code for the number ${num1} is ${String.fromCharCode(num1)}`
// );

//2
// var fNum = +prompt("Enter first number");
// var sNum = +prompt("Enter second number");
// if (fNum < sNum) {
//   document.write(`${sNum} is greater than ${fNum}`);
// } else if (fNum > sNum) {
//   document.write(`${fNum} is greater than ${sNum}`);
// } else if (fNum == sNum) {
//   document.write(`both numbers are equal and they are both ${fNum}`);
// }

//3
// var numCheck = +prompt("Enter the number to check sign");
// if (numCheck > 0) {
//   document.write(`The number you entered ${numCheck} has a positive sign`);
// } else if (numCheck < 0) {
//   document.write(`The number you entered ${numCheck} has a negative sign`);
// } else if (numCheck === 0) {
//   document.write(`The number you entered ${numCheck} is zero`);
// }

//4

// var vowelCheck = prompt("Enter a alphabet");
// if (
//   vowelCheck.toLowerCase() == "a" ||
//   vowelCheck.toLowerCase() == "e" ||
//   vowelCheck.toLowerCase() == "i" ||
//   vowelCheck.toLowerCase() == "o" ||
//   vowelCheck.toLowerCase() == "u"
// ) {
//   document.write("<p> The letter that you have entered is a Vowel </p>");
// } else {
//   document.write("<p> The letter that you have entered is not a Vowel </p>");
// }

//5
// var password = prompt("Enter Password to login");
// var original = "Admin";
// if (password == null || password == " "|| password == "") {
//   document.write("Password cannot be empty or blank");
// }else{
//   if (password == original) {
//     document.write(
//       "Correct! The password you entered matches the original password");
//   } else {
//     document.write("Incorrect password!");
//   }

// }

//6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

//7

// const timeInput = +prompt(
//   "Enter the time in 24-hour clock format (e.g., 1900):"
// );

// // Check if the input is valid
// if (timeInput >= 0 && timeInput <= 2359) {
//   // Extract hours and minutes
//   const hours = Math.floor(timeInput / 100);
//   const minutes = timeInput % 100;

//   // Determine AM or PM
//   let meridian;
//   if (hours < 12) {
//     meridian = "AM";
//   } else {
//     meridian = "PM";
//   }

//   // Convert to 12-hour clock format
//   let hours12;
//   if (hours === 0) {
//     hours12 = 12;
//   } else if (hours > 12) {
//     hours12 = hours - 12;
//   } else {
//     hours12 = hours;
//   }

//   // Display the converted time
//   document.write(
//     `The time in 12-hour clock format is: ${hours12
//       .toString()
//       .padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${meridian} \n`
//   );
//   //padStart is string method to add padding before string value
//   //use padEnd to add at the end of string
//   if (hours < 5) {
//     document.write("It's Midnight!");
//   }if (hours >= 5 && hours < 12) {
//     document.write("Good Morning!");
//   }if (hours >= 12 && hours < 17) {
//     document.write("Good Afternoon!");
//   }if (hours >= 17 && hours < 21) {
//     document.write("Good Evening!");
//   }if (hours >= 21 && hours <= 24){
//     document.write("Good Night!");
//   }


// } else {
//   document.write(
//     "Invalid input! Please enter a valid time between 0000 and 2359."
//   );
// }
