class Person {
    constructor () {
        this.species = "homo sapiens";
    }
    eat () {
        console.log("Eat");
    }
    sleep () {
        console.log("Sleep");
    }
    work () {                               // method overriting.
        console.log("Do Nothing");
    }
}

class Engineer extends Person {
    work () {
        console.log("Solve Peroblem and Build Somethings");
    }
}
class Doctor extends Person {
    work () {
        console.log("Reacrch and Treat Patients");
    }
}

let sanjeev = new Engineer();