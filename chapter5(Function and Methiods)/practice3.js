//                  Question - 1.
//  filter marks of the students who have 90+ marks in that given array.
console.log("this is the array: ");

let marks = [97, 85, 91, 90, 56, 95, 56, 93, 42, 96, 97, 52, 43];
console.log(marks);

console.log("After using filet method");

let topersArr = marks.filter((val) =>{
    return val >90;
});
console.log(topersArr);

//              Question - 2.

/* Take a number n as input from user. Create an array of numbers from 1 to n.
1. Use the reduce method to calculate sum of all numbers in the array.
2. Use the reduce method to calculate product of all numbers in the array. */

let n = prompt("Enter a number: ");

let newArr = [];

for (let i=1; i<=n; i++ ) {
    newArr[i-1] =i;
}
console.log(newArr);

let sum2 = newArr.reduce((resl, curr) =>{
    return resl + curr;
});
console.log("Sum = ",sum2);

let factorial = newArr.reduce((resl, curr) =>{
    return resl * curr;
});
console.log("Factorial = ",factorial);