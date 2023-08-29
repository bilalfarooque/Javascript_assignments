//1 2 
var num1 = 3;
var num2 = 1;
var sum =num1 + num2;
var sub =num1 - num2;
var mul =num1 * num2;
var div =num1 / num2;
var mod =num1 % num2;
document.write("Sum of "+num1+" and "+num2+" is "+sum,"<br>\n");
document.write("Subtraction of "+num1+" and "+num2+" is "+sub,"<br>\n");
document.write("Multiple of "+num1+" and "+num2+" is "+mul,"<br>\n");
document.write("division of "+num1+" and "+num2+" is "+div,"<br>\n");
document.write("Remainder of "+num1+" and "+num2+" is "+mod,"<br>\n","<br>\n");

//3
document.write("<h1>Sequence operations</h1>","<br>\n");
var num3;
document.write("Value after variable declaration is "+num3,"<br>\n");
num3 = 5;
document.write("Initial value: "+num3,"<br>\n");
num3++;
document.write("value after increment is " +num3,"<br>\n");
num3 += 7;
document.write("value after additiion is " +num3,"<br>\n");
num3--;
document.write("value after decrement is " +num3,"<br>\n");
num4=num3%3;
document.write("The remainder is " +num4,"<br>\n","<br>\n");

//4
document.write("<h1>Tickets</h1>","<br>\n");
var ticket = 600;
var numtickets = 5;
var totalcost = ticket*numtickets;
document.write("Total cost to buy "+numtickets+" tickets to a movie is "+totalcost+"PKR","<br>\n","<br>\n");

//5
document.write("<h1>Table of 5</h1>","<br>\n");
var num5 = 5;
var i = 1;
document.write("Table of "+num5,"<br>\n");
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" ); 
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" ); 
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" ); 
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" ); 
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" ); 
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" ); 
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" ); 
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" ); 
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n" ); 
document.write(num5 + "x" + i +"="+ num5*i++,"<br>\n","<br>\n" ); 

//6
document.write("<h1>Temperature Converter</h1>","<br>\n");
var celsius = 25;
var cToF = ((celsius * 9)/5) + 32;
//formula for converting from Celcius into Fahrenheit
document.write(celsius+"\xB0C is "+ cToF+ "\xB0F","<br>\n");
var fahrenheit =70;
var fToC = ((fahrenheit-32)*5)/9;
document.write(celsius+"\xB0C is "+ fToC+ "\xB0F","<br>\n","<br>\n");

//7
document.write("<h1>Shopping Cart</h1>","<br>\n");
var priceItem1 = 650;
var priceItem2 = 100;
var orderItem1 = 3;
var orderItem2 = 7;
var shipping = 100;
var totalCost = (priceItem1*orderItem1)+(priceItem2*orderItem2) + shipping;
document.write("Price of item 1 is " + priceItem1 ,"<br>\n" );
document.write("Quantity of item 1 is " + orderItem1 ,"<br>\n" );
document.write("Price of item 2 is " + priceItem2 ,"<br>\n" );
document.write("Quantity of item 2 is " + orderItem2 ,"<br>\n" );
document.write("Shipping Charges " + shipping ,"<br>\n" ,"<br>\n");
document.write("Total cost of your order is " + totalCost ,"<br>\n" ,"<br>\n");

//8
document.write("<h1>Marks Sheet</h1>","<br>\n");
var totalMarks = 980;
var marksObtained = 804;
var percentage = (marksObtained/totalMarks)*100;
document.write("Total marks: "+totalMarks,"<br>\n");
document.write("Marks Obtained: "+marksObtained,"<br>\n");
document.write("percentage: "+percentage,"<br>\n","<br>\n");


//9
document.write("<h1>Currency in PKR</h1>","<br>\n");
var usd = 10;
var sar = 25;
var usdTopkr = 301;
var sarTopkr = 75;
var pkrTotal = usd*usdTopkr + sar*sarTopkr;

document.write("Total Currency in PKR: "+ pkrTotal,"<br>\n","<br>\n");


//10
document.write("<h1>Sequence operations</h1>","<br>\n");
var mynum = 10;
mynum = ((mynum+5)*10)/2;
document.write("mynum is "+mynum,"<br>\n","<br>\n");

//11
document.write("<h1>Age Calculator</h1>","<br>\n");
var curYear = 2023;
var birthYear= 1995;
var yourAge = curYear-birthYear;
document.write("Current Year: " + curYear,"<br>\n");
document.write("Birth Year: " + birthYear,"<br>\n");
document.write("Your age is: " + yourAge,"<br>\n");
if((curYear -birthYear)>18){
    document.write("<h>You are eligible to vote</h>","<br>\n","<br>\n");
    }else{
        document.write("<h>Sorry you can't vote</h>","<br>\n","<br>\n")};


//12
var radius = 20;
var circumference = 2*3.142*radius;
var area = 3.142*(radius*radius);
document.write("<h1>The Geometrizer</h1>","<br>\n");
document.write("Radius of a circle: "+radius,"<br>\n");
document.write("The circumference is: "+ circumference,"<br>\n");
document.write("Area of the Circle :"+area,"<br>\n");


//
document.write("<h1>The Lifetime Supply Calculator</h1>","<br>\n");
var favSnack = "Noodles"
var estAge = 80;
var snackPerDay = 1;
var totalDays = (estAge *snackPerDay) ; //total days for life
document.write("Favourite Snack: "+favSnack,"<br>")
document.write("Your Age: " +yourAge+" years old.<br>")
document.write("Estimated Max Age: " +estAge+" years old.<br>")
document.write(totalDays +" days will be enough for you to consume all your favourite snacks.<br>");