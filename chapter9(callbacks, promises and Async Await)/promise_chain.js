//  generally this things api doing.

function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1");
            resolve("sucess");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2");
            resolve("sucess");
        }, 4000);
    });
}
//  with the peomise we can fetch the api.

console.log("fetching data1......");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2......");
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    });
});


// Second method.
// console.log("fetching data1......");
// asyncFunc().then((res) => {
//     console.log("fetching data2......");
//     asyncFunc2().then((res) => {});
// });




// Second method.
// console.log("fetching data2......");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// });