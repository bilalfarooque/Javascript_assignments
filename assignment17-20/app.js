//1
// var multiArr = [[], []];
// document.write(multiArr);

//2
// var multiArr2 = [
//   [0, 1, 2, 3],
//   [1, 0, 1, 2],
//   [2, 1, 0, 1],
// ];

// for (var i = 0; i < multiArr2.length; i++) {
//   // This loop is for inner-arrays
//   for (var j = 0; j < multiArr2[i].length; j++) {
//     // Accessing each elements of inner-array
//     document.write("<br>" + multiArr2[i][j]);
//   }
// }

//3
// var counting;
// for (k = 1; k < 11; k++) {
//   document.write("<br>" + k);
// }

//4

// var number = +prompt("Enter a number to show its multiplication table");

// var length = +prompt("Enter length of multiplication table");

// document.write(`<br> Mutliplication table of ${number} of length ${length}`);
// for (n = 1; n <= length; n++) {
//   document.write("<br>\n" + number + "x" + n + "=" + number*n );
// }

//4

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(f=0; f<fruits.length;f++){
//     document.write("<br>\n" + fruits[f]);
// }
// for(f=0; f<fruits.length;f++){
//     document.write("<br>\n" + "Element at index "+ f + " is " + fruits[f]);
// }

//5

// document.write(" <br>\n Counting: <br>\n");
// for (a = 1; a < 16; a++) {
//   document.write(a + ",");
// }

// document.write("<br>\n Reverse Counting: <br>\n");
// for (b = 10; b > 0; b--) {
//   document.write(b + ",");
// }

// document.write(" <br>\n Even: <br>\n");
// for (c = 0; c < 21; c++) {
//     if((c % 2 == 0)){
//         document.write(`${c}, `);
//       }
// }

// document.write(" <br>\n Odd: <br>\n");
// for (c = 0; c < 21; c++) {
//     if((c % 2 == 0)){
//         document.write();
//       }else{
//         document.write(`${c}, `);
//       }
// }

// document.write(" <br>\n Series: <br>\n");
// for (c = 2; c < 21; c++) {
//     if((c % 2 == 0)){
//         document.write(`${c}k, `);
//       }
// }

//7

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];

// var item = prompt("Welcome to United, What do you want to order Sir/Ma'am?");

// for(p=0; p<bakery.length;p++){

//     if(item.toLowerCase() == bakery[p]){
//         document.write(`${item} is available at index ${p} in our bakery`);
//     }
// }
// if(item != bakery[p]){
//     document.write(`We are sorry. ${item} is not available in our bakery`);
// }

//8

// var A = [24, 53, 78, 91, 12, 99];
// var large = -Infinity;

// for(i=0;i<A.length;i++){
//     if(A[i]>large){
//         large= A[i]
//     }
// }

// document.write("The largest number is "+ large);

//9
// var small = Infinity;

// for(i=0;i<A.length;i++){
//     if(A[i]<small){
//         small= A[i]
//     }
// }

// document.write("The smallest number is "+ small);

//10

var a = 5;

for (c = 5; c < 101; c++) {
  if (c % 5 == 0) {
    document.write(`${c}, `);
  }
}
