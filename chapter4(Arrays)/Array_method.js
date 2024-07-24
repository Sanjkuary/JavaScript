// push method add form ending. 

let foodItems = ["Potato", "Apple", "Litchi", "Onion", "Tomato"];
foodItems.push("Mango", "Burger", "Paneer");
console.log(foodItems);


//unshift method, add from starting.

let task = ["Do", "Go", "Eat", "Sleep"];
task.unshift("Wake up", "Excersice");
console.log(task);

//pop method

let go_to = ["Mumbai", "Pune", "Patna", "Saharsa", "Hajipur"];
console.log(go_to);
go_to.pop("Hajipur");     // delete form ending.
go_to.shift("Mumbai");    // delete from starting.
console.log(go_to);


// toString() convert array into string.

let state = ["Andhra Pradesh", "Kolkata", "Bihar", "Jharkhand", "Up", "New Delhi"];
console.log(state);

console.log(state.toString()); // it just take the variable information and convert into their own statement given by the method.

console.log(state);   // Original array will not change.

// concat method, to join multiple array and return result.

let fullName = ["Sanjeev", "Rahul", "Shivam", "Omprakash", "Pandav"];
let surName = ["Kumar", "Raj", "Yadav", "Shukla", "Dubey"];

let name = fullName.concat(surName);
console.log(name);



// slice method. not change origional method

let sweets = ["Rasgulla", "Gulabjamun", "Kalajamun", "Rasmalai", "Burfi"]

console.log(sweets);

console.log(sweets.slice(2,4));


// splice method. change original array.

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num);
num.splice(2,3,100, 101, 102);
console.log(num);

// add value at any index 

let num1 = [200, 201, 202, 203, 204, 205, 206, 207];
console.log(num1);
num1.splice(2,0,1001);
console.log(num1);

// delete the value.
let num2 = [1001, 1002, 1003, 1004, 1005, 1006];
console.log(num2);
num2.splice(2,1);
console.log(num2);

//Replace the element.

let num3 = [2001, 2002, 2003, 2004, 2005, 2006, 2007];
console.log(num3);

num3.splice(2,1,100);
console.log(num3);

