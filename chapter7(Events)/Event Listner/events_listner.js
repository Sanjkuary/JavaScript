let btn1 = document.querySelector("#btn1");
btn1.addEventListener ("click", () => {
    console.log("Button was clicked!");
});

btn1.addEventListener ("click", (evt) => {
    console.log("Button was clicked!");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
});

btn1.addEventListener ("click", () => {
    console.log("Button was clicked - handler1");
});

btn1.addEventListener ("click", () => {
    console.log("Button was clicked - handler2");
});

const handler3 = () => {
    console.log("Button was clicked - handler3");
};

btn1.addEventListener ("click", handler3);

btn1.addEventListener ("click", () => {
    console.log("Button was clicked - handler4");
});

btn1.removeEventListener("click", handler3);