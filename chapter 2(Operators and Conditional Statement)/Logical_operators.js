// logical AND &&

let marks1 = 65;
let marks2 = 55;

let cond1 = marks1 > marks2; //true
let cond2 = marks1 === 65; //true

console.log("cond1 && cond2 ", cond1 && cond2); //true


//logical OR ||

 
let marks3 = 65;
let marks4 = 55;

// let cond3 = marks1 > marks2; //true
// let cond4 = marks1 === 65; //true

console.log("marks3 || marks4 ", marks3>marks4 || marks3 !== 65); //true


// logical NOT !

let marks5 = 65;
let marks6 = 55;

console.log("!(65<55) =" , !(marks5<marks6)); // false but final result is ture.

console.log("!(65<55) =" , !(marks5===65)); //true but the final result is false.