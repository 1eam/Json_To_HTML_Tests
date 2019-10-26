let people = [
    {
        name: "Esther",
        age: 19
    },
    {
        name: "Vladi",
        age: 20
    },
    {
        name: "John",
        age: 24
    },
];

let output = " "

for (var i = 0; i < people.length; i++) {
    output += "<li>" + people[i].name + "</li>"
}

document.getElementById("generatedLitags").innerHTML = output;
