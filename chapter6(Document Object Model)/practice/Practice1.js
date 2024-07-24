//    Question 1.
//  Create a H2 heading element with text - “Hello JavaScript”. Append “from Apna College students” to this text using JS.

 let h2 = document.querySelector("h2");
 console.dir(h2.innerText);

 h2.innerText = h2.innerText + " From Apna College Student.";




//              Question 2.
// Create 3 divs with common class name - “box”. Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");
// console.log(divs[0]);

let idx = 1;
for (div of divs){
    div.innerText = `Unique Value ${idx}`;
    idx++
}

//  this way also can change the value of the div.

// divs[0].innerText = "Unique Value 1";
// divs[1].innerText = "Unique Value 2";
// divs[2].innerText = "Unique Value 3";

