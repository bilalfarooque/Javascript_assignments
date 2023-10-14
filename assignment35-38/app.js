//1

// function currentTime() {
//     var date = new Date();
//     document.write(date)
// }

// currentTime();

//2

// function fullName(fname,lname) {
//     document.write(`Hi ${fname} ${lname}`);
// }

// fullName("bilal","farooque");

//3

// function addition(num1,num2) {
//     document.write(`Added =  ${num1+num2}`);
// }

// addition(2,3);

//4

// function calculator(num1,num2,operator){
//     var result = 0
//     num1 = Number(num1)
//     num2 = Number(num2)
//     switch(operator){
//         case "+" :
//         result = num1 + num2;
//         break;
//         case "-" :
//         result = num1 - num2;
//         break;
//         case "*" :
//         result = num1 * num2;
//         break;
//         case "/" :
//         result = num1 / num2;
//         break;
//     }
//     document.write(`result: ${num1} ${operator} ${num2} = ${result}`)
// }

// calculator(2,3,"/");

//5

// function square(num){
//     document.write(`${num*num}`);
// }

// square(6);

//6

// function factorialize(num) {
//     if (num < 0)
//           return -1;
//     else if (num == 0)
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }

//   }
//   factorialize(5);

//7

// var startVal = prompt("Enter starting number");
// var endVal = prompt("Enter ending number");

// function countdown() {
//     for(i=startVal; i<= endVal;i++){
//         document.write(`${i} <br>`);
//     }
// }
// countdown();

//8

// function calculateSquare(num){
//     return num*num
// }

// function calculateHypotenuse(base,perp,cb){
//     var hypo = cb(base) + cb(perp)
//     hypotenuse = (Math.sqrt(hypo)).toFixed(2)
//     return hypotenuse

// }

// document.write(`The Hypotenuse of the triangle is ${calculateHypotenuse(2,2,calculateSquare)}`);

//9

// function areaRec(l,h){
//     area = l*h;
//     return area;
// }

// document.write(`i Area of a Rectangle is ${areaRec(2,3)} <br>`);

// var length = 5;
// var height = 3;

// document.write(`ii Area of a Rectangle is ${areaRec(length,height)}<br>`);

//10

// function  palindrome(str){
//    var lowStr = str.toLowerCase()
//    var reverStr = lowStr.split("").reverse().join("");
//    if(lowStr == reverStr){
//     document.write(`Its a palindrome`);
//    } else{
//     document.write(`Sorry its not a palindrome`);
//    }
// }

// palindrome("maddam");

//11

// function capitalize(str){
//     var newStr = str.split(" ")
//     console.log(newStr)
//     var capWord = newStr.map(upper)

//     function upper(word){
//         word = word.charAt(0).toUpperCase() + word.slice(1);
//         console.log(word)
//         return word
//     }

//     capWord =  capWord.join(" ")
//     return capWord

// }

// document.write(capitalize("the open letter for the company"));

//12

// function longestWord(str) {
//   var newStr = str.split(" ");
//   var longWord = "";
//   for (var i in newStr) {
//     if (newStr[i].length > longWord.length) {
//       longWord = newStr[i];
//     }
//   }
//   return longWord;
// }

// document.write(longestWord("the open letter for the company"));

// function occurence(str, letter) {
//   var newLetter = str.split("");
//   let count = 0;
//   for (i = 0; i < str.length; i++) {
//     if (newLetter[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// document.write(occurence("JsResourceS.com", "o"));


// function calcCircumference(radius){
//     var circum = (2*Math.PI*radius).toFixed(2);
//     return circum;
// }

// document.write(`The Circumference of a circle with radius 5 is: ${calcCircumference(5)} <br>`);


// function calcArea(radius){
//     var cirArea = (Math.PI*(radius*radius)).toFixed(2);
//     return cirArea ;
// }
// document.write(`The Area of a circle with radius 5 is: ${calcArea(5)}<br>`);