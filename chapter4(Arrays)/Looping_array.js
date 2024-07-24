// using for loop

let subj = ["Eng", "Math", "Chem", "Phy", "Hindi","Bio", "Sanskrit"];

for(let idx = 0; idx < subj.length; idx++){
    console.log(subj[idx]);
}


// using for of

for (let name of subj){
    console.log(name);
    console.log(name.toUpperCase());
}