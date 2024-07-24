//              Question1.
// Create a new button element. Give it a text “click me”, background color of red & text color of white. Insert the button as the first element inside the body tag.



let newBtn = document.createElement("button");
newBtn.innerText="click me!";
newBtn.style.color= "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);



//                  Question 2.
/* Create a <p> tag in html, give it a class & some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Solve this problem using classList.*/


let para = document.querySelector("p");
para.classList.add("newClass");



