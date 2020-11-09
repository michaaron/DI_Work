let addressNumber = 12;
let addressStreet = "East Lane";
let country = "Zimbabwe";

let global_address = "I live in " + addressNumber + " " + addressStreet + " in " + country;

console.log(global_address);

let yearOfBirth = 1990;
let futureYear = 2070;

let futureAge = futureYear - yearOfBirth   

console.log("I will be " + futureAge + " in " + futureYear)


let pets = ["cat","dog","fish","rabbit","cow"]
console.log(pets[1])

pets.push("horse")
pets.splice(3,1)
console.log(pets)

console.log(pets.length)
