//  to get the attribute value.


// let div = document.querySelector("div");
// console.log(div);


// let id = div.getAttribute("id");
// console.log(id);


// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));


//  set the attribut new value.

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newClass"));


//  style attribute.

// let div = document.querySelector("div");
// console.log(div);
// div.style.backgroundColor = "green";
// // div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";
// div.innerText = "Hello!";
// div.innerHTML = "<i>Hello!</i>";


let newbtn = document.createElement("button");
newbtn.innerText= "click me";
console.log(newbtn);


let div = document.querySelector("div");
div.after(newbtn);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>This is testing!</i>";

document.querySelector("body").prepend(newHeading);


let para = document.querySelector("p");
para.remove();

newHeading.remove();