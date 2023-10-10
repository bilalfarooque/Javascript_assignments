//1 &  2

// var num = prompt("Enter a number");
// document.write(` number : ${num} <br>`)
// document.write(` round off value : ${Math.round(num)} <br>`);
// document.write(` floor value : ${Math.floor(num)} <br>`);
// document.write(` ceil value : ${Math.ceil(num)} <br>`);

//3
// var num2 = prompt("Enter a number");
// document.write(` absolute value : ${Math.abs(num2)} <br>`);

//4

// var randNum = 0;
// document.write(`random dice value: ${Math.floor(Math.random()*5)+1}`);

//5

// var coin =  Math.floor(Math.random()*2+1);
// if(coin == 1){
//     document.write(coin+ "<br>");
//     document.write("Tails");
// }else{
//     document.write(coin + "<br>");
//     document.write("Heads");

// }


//6

// var randNum = Math.floor(Math.random()*100) + 1;
// document.write(`random number between 1 and 100 : ${randNum}`);

//7

// Ask the user for their weight
// const userInput = prompt("Please enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):");

// // Initialize variables to store the numeric and unit parts
// let numericPart = "";
// let unitPart = "";

// // Iterate through the input string
// for (let i = 0; i < userInput.length; i++) {
//     const char = userInput[i];

//     // Check if the character is a digit or a dot (for decimal numbers)
//     if (/[0-9.]/.test(char)) {
//         numericPart += char;
//     } else {
//         unitPart += char;
//     }
// }

// document.write(`${numericPart} kilograms`);

//8

// var secret = Math.floor(Math.random()*11)+1;
// document.write(`${secret} <br>`);
// var userInput = +prompt("Enter a number between 1 and 10");
// if(userInput == secret){
//     document.write("Bingo!!");
// }else{
//     document.write("Try Again");
// }