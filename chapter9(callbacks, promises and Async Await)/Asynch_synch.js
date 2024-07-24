// Synchronous program.

console.log("one");
console.log("two");

/// Asynchronous program.

function hello() {
    console.log("Hello Sanjeev!");
}
setTimeout(hello, 4000);            //timeout.

console.log("three");
console.log("four");