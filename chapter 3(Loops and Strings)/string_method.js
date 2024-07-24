// string method.

let sentence = "This is a Paragraph For Javascript";

console.log(sentence.toUpperCase()); // uper case.

console.log(sentence.toLowerCase()); //lower case.

console.log(sentence.charAt(5));

let Paragraph = "          This is for trim ";
console.log(Paragraph.trim());

console.log(sentence.slice(5,12));

let line = "New";
let line2 = " Delhi";
let res = line.concat(line2);
console.log(res);

let phone = "9891228080";
console.log(phone.replace("0","9"));


let phone1 = "9891228080";
let newPhone = phone1.replace(/0(?!.*0)/, "9");
console.log(newPhone);



