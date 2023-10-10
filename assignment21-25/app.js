//1

// let fname = prompt("Enter first name");
// let lname = prompt("Enter last name");

// let fullName = fname+lname;
// document.write(`Hi ${fullName}`);

//2

// let phone = prompt("Enter Mobile Phone Brand");
// document.write(`The length of string is ${phone.length}`);

//3

// let string1 = "Pakistani";
// let index = string1.indexOf('n');
// document.write(`Index of 'n':  ${index}`);

//4

// let string2 = "Hello World";
// let lastIndex = string2.lastIndexOf("l");
// document.write(`last index of 'l': ${lastIndex}`);

//5

// let string1 = "Pakistani";

// document.write(`Character at index 3: ${string1.charAt(3)}`);

//6

// let fname = prompt("Enter first name");
// let lname = prompt("Enter last name");

// document.write(`Hi ${fname.concat(lname)}`);

//7

// let city = "Hyderabad"

// document.write(`After Replacement ${city.replace("Hyder", "Islam")}`);

//8

// var message = "Ali and Sami are best friends. They play cricket and football together.";

// document.write(`${message.replaceAll("and",  "&")}`);

//9

//unary operator (+)
// let value = +("472");
// document.write(`${value} Type of value is ${typeof(value)}`);

//10

// let userInput = prompt("enter any string");
// document.write(`UpperCase : ${userInput.toUpperCase()}`);

//11

// let userInput = prompt("enter any string");
// document.write("Title Case: " + userInput[0].toUpperCase() + userInput.slice(1));

//12

// var num = 35.36;
// document.write((num.toString()).replace(".",""));

//13

// var userName = prompt("Enter Username");
// const pattern = /[@.,!]/g
// if(pattern.test(userName)){
//     alert("Please enter a valid username");
// }

//14

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var item = prompt("Welcome to United, What do you want to order Sir/Ma'am?");

// //find the item using index
// var itemIndex = bakery.findIndex(function(bakeryItem) {
//     return bakeryItem.toLowerCase() === item.toLowerCase();
// });
// //findIndex returns -1 if not index not found
// if (itemIndex !== -1) {
//     document.write(`${item} is available at index ${itemIndex} in our bakery`);
// } else {
//     document.write(`We are sorry. ${item} is not available in our bakery`);
// }

//15

// var password = prompt("Enter Password");

// // Check if the password contains alphabets and numbers
// const containsAlphabet = /[a-zA-Z]/.test(password);
// const containsNumber = /[0-9]/.test(password);

// // Check if the password does not start with a number
// const startsWithNumber = /^[0-9]/.test(password);

// // Check if the password is at least 6 characters long
// const isLengthValid = password.length >= 6;

// // Password meets all requirements
// if (!containsAlphabet) {
//   alert("Password must contain an alphabet");
// }
// else if (!containsNumber) {
//   alert("Password must contain a number.");
// }
// else if (!isLengthValid) {
//   alert("Password length should be greater than or equal to six.");
// }
// else if (startsWithNumber) {
//   alert("The password cannot start with a number.");
// } else {
//   alert("Your password has passed all checks. Please proceed.");
// }


//16

// var university = "University of Karachi";
// var uniArr = university.split("");
// for(x of uniArr){
//   document.write(x + "<br>");
// }

//17

// var userInput  = prompt("Enter any string");
// //last character of input
// document.write("Last Character: "+userInput.charAt(userInput.length-1));

//18

// var text = "The quick brown fox jumps over the lazy dog";
// var count = 0;
// var word = "word"
// //occurrence of word in the in given string

// for(i=0; i<text.length;i++){
//   word = text.slice(i,i+3).toLowerCase()
//   if(word == "the"){
//     count++;
//     document.write(`found word "${word}" at index ${i} <br>`);
//     document.write(`There are ${count} occurences of the word "${word}" <br>`)
//   }
// }

