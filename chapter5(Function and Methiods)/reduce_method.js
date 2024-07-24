// sum of elements in an array.

let summ = [2, 4, 5, 6, 8, 3, 6];
console.log(summ);
const output = summ.reduce((result, current) => {
    return result + current;
});

console.log(output);


// find the largest elements in any array.

let elem = [12, 85, 92, 76, 23, 45, 96, 102, 4562, 10, 15, 489, 256];
console.log(elem);
console.log("After using reduce method");

const element = elem.reduce((previous, current) =>{
    return previous > current ? previous : current;
});

console.log(element);