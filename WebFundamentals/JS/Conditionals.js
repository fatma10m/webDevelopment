


// If/Else Statements
var x = 25;
if (x > 50) {    
    console.log("bigger than 50");
}
else {    
    console.log("smaller than 50");
}
// because x is not greater than 50, the second print statement, "smaller than 50", is the only line that will execute



// If/Else If/Else Statements
var x = 75;
if (x > 100) {    
    console.log("bigger than 100");
}
else if (x > 50) {    
    console.log("bigger than 50");
}
else if(x > 25) {
    console.log("bigger than 25");
}
else {    
    console.log("small number");
}
// because the first statement is not true, but the second is it will print "bigger than 50" to our console.  However, it won't even try to check our else if(x > 25) or else statements because it has already found something in the chain that is true.


var num1 = 20;
var num2 = 5;
if(num1 < num2){
  num2 = num2 * num1;
}
else{
    num1 = num1 / num2;
}
if(num1 < num2){
  num1 = num1 * 2;
}
else if(num1 == num2){
  num2 = num1 * num2;
}
else{
  num2 = num2 * 2;
}
console.log(num1);
console.log(num2);