var testArr = [6,3,5,1,2,4];
// Challenge 1: Print Values and Sum

// Print each array value and the sum so far
// The expected output will be:

// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21

// print vals and sum
var sum=0;
for(let i=0; i<testArr.length; i++){
    sum+=testArr[i];
    console.log('val:', testArr[i], 'sum:', sum);
}




// Challenge 2: Value * Position

// Multiply each value in the array by its array position
// The expected output will be:
// [0,3,10,3,8,20]

// Value * Position
for(let i=0; i<testArr.length; i++){
    testArr[i] = testArr[i] * i;
}
console.log(testArr);