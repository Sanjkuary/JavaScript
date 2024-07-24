// 1. Get user to input a number using prompt("Enter a number:"). check if the number is a multiple of 5 or not.

let num_2 = prompt("Enter a number : ");
if (num_2 % 5 === 0){
    console.log(num_2, "is a multiple of 5");
} else{
    console.log(num_2, "is NOT a multiple of 5");
}

// 2 . write a code which can give grades to students according to their scores.
/* 90 - 100 A
   70 - 89 B
   60 - 69 C
   50 - 59 D
   0 - 49 F */

let score = prompt("Enter your score (0 - 100):");

if(score >=90 && score <=100){
    console.log("Your grade is A.");
} else if(score >= 70 && score <=89){
    console.log("Your grade is B.");
} else if (score >= 60 && score <= 69){
    console.log("Your grade is C.");
} else if (score >= 50 && score <=59){
    console.log("Your grade is D.");
}else{
    console.log("Your are Fail.");
}