//1

var curDate = new Date();
// document.write(curDate + "<br>");

//2
//method 1
// var months = ["Janurary" , "Feburary" , "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// document.write(months[curDate.getMonth()]);

// //method 2

// var month = curDate.toLocaleString("default",{month :"long"})

// document.write(month);

//3
//4

// var day = curDate.toLocaleString("default", { weekday: "long" });


// var dayWk = document.write(day.slice(0, 3));


// switch(dayWk) {
//   case "Sat":
//     document.write("It's Fun Day");
//     break;
//   case "Sun":
//     document.write("It's Fun Day");
//     break;
//   default:
//     document.write("It's Work Day");
// }

//5

// var daysType = curDate.getDate()

//
//  if(daysType < 15){
//     document.write("First fifteen days of the month");
// }else{
//     document.write("Last days of the month")
// }

//6


// var tillDateMs = curDate.getTime();
// var tillDateMins = tillDateMs/(1000*60);

// document.write(`Current Date: ${curDate} <br>`)
// document.write(`Elapsed milliseconds since January 1, 1970: ${tillDateMs} <br>`)
// document.write(`Elapsed minutes since January 1, 1970: ${tillDateMins} <br>`)

//7

// if(curDate.getHours() < 13){
//     document.write("Its AM")
// }else{
//     document.write("Its PM")

// }

//8

// Create a Date object for December 31, 2020
// var date = new Date(2020, 11, 31);

// document.write(date);


//9

// var ramdan1st = new Date(2023, 3, 11);

// var diff = curDate - ramdan1st;

// var days = Math.floor(diff/(1000*60*60*24));

// document.write(`${days} days have passed since 1st Ramadan, 2023`);



//10


// var firstDayOfYear = new Date(2023, 1, 1);
// var secondsPassed = Math.round((curDate - firstDayOfYear)/1000) ; // in seconds

// document.write(`on reference date ${curDate}, ${secondsPassed} seconds had passed since the beginning of 2023`);


//11

// var hourAhead  = curDate.getHours()-1;
// var num = new Date()
// num.setHours(hourAhead);

// document.write(`Current date : ${curDate} <br> 1 hour ago, it was ${num}`)

//12
// var centuryAhead  = curDate.getFullYear()- 100;
// var yearNew = new Date();
// yearNew.setFullYear(centuryAhead);

// document.write(`Current date : ${curDate} <br> 100 years back, it was ${yearNew}`);

//13

// var age = +prompt("Enter your age");
// var curYear = curDate.getFullYear();
// var birthYear = curYear-age;
// document.write(`Your age is ${age} <br> Your birth year is ${birthYear}`);


14
// var custName = prompt("Enter customer name");
// var mon = prompt("Enter bill month");
// var units = +prompt("Enter number of units consumed");
// var perUnit = 32.2;
// var netPayable = Number((units*perUnit).toFixed(2));
// var lateSurcharge = Number((netPayable*0.10).toFixed(2)) ; //10%
// var grossPayable = netPayable + lateSurcharge;

// console.log(typeof(units));
// console.log(typeof(perUnit));
// console.log(typeof(netPayable));


// document.write(`<h1> K-Electric Bill </h1>`);
// document.write(`Customer Name : ${custName} <br>`);
// document.write(`Month : ${mon} <br>`);
// document.write(`Number of units : ${units} <br>`);
// document.write(`Charges per unit : ${perUnit} <br>`);
// document.write(`Net Amount Payable (within Due Date) : ${netPayable} <br>`);
// document.write(`Late Payment Surcharge : ${lateSurcharge} <br>`);
// document.write(`Gross Amount Payable (after Due Date) : ${grossPayable} <br>`);
