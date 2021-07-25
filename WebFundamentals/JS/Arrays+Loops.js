var arr = [2,4,6,8,10];
console.log(arr[0]);  
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]); 

// Loops + Arrays
var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i++) {        
    console.log(i);             // prints the index       
    console.log(arr[i]);        // prints the array value at that index
}

// or 
var arr = [2,4,6,8,10];
for (var i = 0; i < arr.length; i++) {        
    console.log("index:"+i + " value:"+arr[i]);
}