class Person1 {
    constructor () {
        console.log("enter parent constructor");
        this.species = "homo sapiens";
    }

    eat () {
        console.log("Eat");
    }

}

class Engineer1 extends Person1 {
    constructor(branch) {
        console.log("enter child constructor");
        super();         // to invoke the paraents constructor.
        this.branch = branch;
        console.log("exit child constructor");
    }
    work () {
        console.log("Solve Peroblem and Build Somethings");
    }
}

let engobj = new Engineer1("Chemical engg");

                            // Second Method.
class Person2 {
    constructor (name) {
        this.species = "homo sapiens";
        this.name = name;
    }

    eat () {
        console.log("Eat");
    }

}

class Engineer2 extends Person2 {
    constructor(name) {
        super(name);         // to invoke the paraents constructor.
}
work () {
    super.eat();
    console.log("Solve Peroblem and Build Somethings");
}
}
let engg = new Engineer1("Sanjeev");


