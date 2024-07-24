let num2 = [67, 85, 72, 22, 46];

console.log(num2);
console.log("using map method for new array.");


let newNum = num2.map((val) => {
    return val*val;
});
console.log(newNum);