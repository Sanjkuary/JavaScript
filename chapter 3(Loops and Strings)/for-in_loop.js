//  for-in loop.

let student = {
    name : "Sanjeev Kumar",
    age : 30,
    cgpa : 7.8,
    isPass : true,
};

for (let key in student){
    console.log("key = ", key, "value= ", student[key]);
}