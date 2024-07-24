// const student = {
//     fullName : "Sanjeev Kumar",
//     marks : 94,
//     printMarks : function () {
//         console.log("marks", this.marks);   // this.marks = student.marks.
//     },
// };

//  to create self proto type.

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
    // calcTax2 : function () {
    //     console.log("tax rate is 10%"); 
    // }
};

const karanArjun = {
    salary : 50000,
    calcTax() {
        console.log("tax rate is 20%");
    },
};

karanArjun.__proto__ = employee;