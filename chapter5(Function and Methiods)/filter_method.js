let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num3);
console.log("new array using filter method");

let even = num3.filter((val) => {
    return val % 2 === 0;
});

console.log(even);