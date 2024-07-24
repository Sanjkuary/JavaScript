// function myFunction(){
//     console.log("I am sanjev Kumar");
//     console.log("I am learning Function");
// }
// myFunction();


function myFunction(info){          // info:- parameters.
    console.log(info);
}

myFunction("I am sanjeev Kumar and I am learning JS.");         // it is arguments.


// sum of two numbers.

// function sum(x, y) {
//     console.log(x + y);
// }
// sum(5, 8);

// anither way.

function sum1 (x, y){
    s = x + y;
    return s;
}
let val = sum1( 5, 8);
console.log(val);