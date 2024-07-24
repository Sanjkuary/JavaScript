// DOM Manipulation use when we need to change dynamicly on the console window.
//                  1. Selecting by ID.
let heading = document.getElementById("heading");
console.dir(heading);



//                  2. Selecting by class.
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);



//                  3. selecting bt tag.
let paras = document.getElementsByTagName("p");
console.dir(paras);



//                  4. Queary Selectors.
let First_elements = document.querySelector("p");  // for first elements.
console.dir(First_elements);


let All_elements = document.querySelectorAll("p"); // for all elements.
console.dir(All_elements);