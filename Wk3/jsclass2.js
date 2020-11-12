
let age = prompt("How old are you?")

if (age < 18) {

    alert("Sorry, you are too young to drive this car. Powering off")
} else if (age == 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
} else {
    alert("Powering On. Enjoy the ride!")
}


let space = {
    username: "Jerry101",
    passowrd: "PwordJerry202",
}
//creating an object

let database = [];
database.push(space);
console.log(database);
//push adds the object to the array


let newsfeed = [];
//this creates the array

let people = {
    username: "harry",
    timeline: "the best guy ever"
}

let person = {
    username: "tom",
    timeline:  "the second best guy ever"
}

let human = {
    username: "felix",
    timeline: "not really the best guy ever"
}

newsfeed.push(people, person, human)
//pushing the three objects into a single array

console.log(newsfeed);