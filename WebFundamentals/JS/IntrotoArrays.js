var usersFirstName = "Dwight";    
var usersLastName = "Schrute";    
var usersEmail = "beetsbears@battlestar.com";

// Arrays
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];


// Add:
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
user.push("jello");    
console.log(user);    // ["Dwight", "Schrute", "beetsbears@battlestar.com", "jello"]

// Remove:
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
user.pop();    
console.log(user);    // ["Dwight", "Schrute"]

// Access/Update:
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
console.log(user[0]);    // reading the value -- OUTPUT: Dwight    
user[1] = "Martin";    // updating the value    
console.log(user);    // ["Dwight", "Martin", "beetsbears@battlestar.com"]


// Length:
var user = ["Dwight", "Schrute", "beetsbears@battlestar.com"];    
console.log(user.length);    // 3    
user.pop();    
console.log(user.length);    // 2