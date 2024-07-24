// question 1
// for given array with marks of students->[85, 97, 44, 37, 76, 60], Find the average marks of the entire class.

let mark = [85, 97, 44, 37, 76, 60];

let sum = 0;

for (let val of mark){                           // using for of loop
    sum += val;                  
}

let avg = sum / mark.length;                    // claculate ave marks
console.log(`avg marks of the class = ${avg}.`);                 // template litras with backtrick.



// queston 2.
// for a given array with prices of 5 items -> [250, 645, 300, 900, 50], All iteams have an offer of 10% OFF on them. Change the array to store the fibnal price after applying offer.

// using for of loop.

let items = [250, 645, 300, 900, 50];
console.log(items);
console.log("value of items after applying offers");

let i = 0;
for (let val of items){
    let offer = val / 10;
    items[i] = items[i] -offer;
    console.log(`value of offer = ${items[i]}`);
    i++;
}


// using for loop

for (let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
    
}
console.log(items);