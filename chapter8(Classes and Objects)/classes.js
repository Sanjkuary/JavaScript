class Car {
    constructor(brand, milage) {                    // Initializtion time.
        console.log("Creating new object");
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }

    // setBrand(brand) {                               // variables.
    //     this.brandName = brand;                     // this.brandName is a properties of an object.
    // }
};


let Fortuner = new Car("Fortuner", 10);  // constructor.
// Fortuner.setBrand("Toyota");
console.log(Fortuner);
let Honda = new Car("Honda", 11);       // constructor.
// Honda.setBrand("Honda");
console.log(Honda);
let Alto = new Car("Suzuki", 9);       // constructor.
// Alto.setBrand("Suzuki");
console.log(Alto);
let Endover = new Car("Ford", 8);      // constructor.
// Endover.setBrand("Ford");
console.log(Endover);



class mySelf {
    name () {
        console.log("Sanjeev");
    }
    serName () {
        console.log("Sanjeev Kumar");
    }

    setName(name) {
        this.name = name;
    }
};

let Sanjeev = new mySelf;
Sanjeev.setName("Sanjeev");
// console.log(Sanjeev);
let Kumar = new mySelf;
Kumar.setName("Sername");
// console.log(Kumar);
