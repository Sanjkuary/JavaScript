//                          Question1.
// You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.

let data = "Secret information";

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData () {
        console.log("data = ", data);
}

}
let student1 = new user("Sanjeev", "sanjeev@gmail.com");
let student2 = new user("Kumar", "kumar@gmail.com");
let student3 = new user("Yadav", "yadav@gmail.com");

let teacher1 = new user("dean", "dean@email.com");
let teacher2 = new user("Head", "head@email.com");
let teacher3 = new user("Hod", "hod@email.com");


//                      Question 2.
// Create a new class called Admin which inherits from User. Add a new method called editData to Admin that allows it to edit website data.

class admin extends user {
    constructor(name, email) {
        super(name,email);
    }
    editData () {
        data = "Some new value";
    }
}
let admin1 = new admin("admin", "admin@college.com");

