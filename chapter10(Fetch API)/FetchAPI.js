const URL = "https://alexwohlbruck.github.io/cat-facts/docs/";
const factPara = document.querySelector("#fact");

// let promise = fetch(URL);
// console.log(promise);


const getFacts = async () => {
    console.log("getting data .....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[0].text;
};
