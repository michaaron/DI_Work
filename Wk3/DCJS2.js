// if (expression 1) {
//     Statement(s) to be executed if expression 1 is true
// } else if (expression 2) {
//    Statement(s) to be executed if expression 2 is true
// } else if (expression 3) {
//    Statement(s) to be executed if expression 3 is true
// } else {
//    Statement(s) to be executed if no expression is true
// }

let work = "This work is not so bad!";

let notIndex = work.indexOf("not");
let badIndex = work.indexOf("bad");

if (notIndex < badIndex) {
    newWork = work.replace("not so bad", "good")
}
console.log(newWork);