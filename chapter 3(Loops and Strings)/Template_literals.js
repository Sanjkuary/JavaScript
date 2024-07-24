// Template Literals

let objects = {
    item : "Pen",
    price : 10
};

let template = `The cost of ${objects.item} is RS:${objects.price}.`
console.log(template);

// console.log("The cost of ", objects.item, "is RS", objects.price); // we can print this information from this types also, but we need use comma again and again.


// escape character. \n to print in next line.
let full = "Sanjeev \tKumar";
console.log(full);
