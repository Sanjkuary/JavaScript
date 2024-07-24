// let promise = new Promise((resolve, reject) => {
//     console.log("This is promise."); 
//     resolve("done");
//     // reject("Some error occured")
// });

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             console.log("data", dataId);
//             resolve("Success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     })
// }


const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("This is a promise");
        // resolve("Success");
        reject("network error");
    });
};

let promise = getPromise();
promise.then((res) => {
    console.log("Promise fulfilled", res);
});

promise.catch ((err) => {
    console.log("Rejected", err);
});
