// ------------------
// Example 1
var people = ["Sabelo", "Fezeka", "Boom", "Bae"];
var list = document.getElementById("people-list");

for (var i = 0; i < people.length; i++) {
    var person = people[i];
    var element = document.createElement("li");
    element.innerHTML = person;

    // todo
    element.addEventListener("click", function () {
        alert("You clicked on " + person + ", at index " + i);
    });

    list.appendChild(element);
}




// console.log("Scopes");