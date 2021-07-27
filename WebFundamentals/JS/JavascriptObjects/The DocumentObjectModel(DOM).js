
console.log(document.body);

var body = document.body;
// this is more fun if it's a random page with stuff already on it (like the learning platform for example).
body.innerHTML = "Hello World";

var bod = document.body;
for (var i = 0; i < 10; i++) {
    bod.innerHTML += "<p>This has gone through the loop completely: " + i + " times</p>";
}

// Lastly, these DOM elements can listen for events. After we’ve placed all the p-tags into the body (using the above loop), let’s put an event listener on them! 
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
for (var i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i].addEventListener);
    paragraphs[i].addEventListener('click', function () {
        this.style.background = 'blue';
    });
}