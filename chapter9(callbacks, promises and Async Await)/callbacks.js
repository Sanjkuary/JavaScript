function sum(a, b) {
    console.log(a +b);
}
function calculator(a,b, sumCallback) {
    sumCallback(a,b);
}
calculator(1, 3, sum);



const hello1 = () => {
    console.log("Hello!");
}
setTimeout(hello1, 2000);