// create username with their fullname with full name length starting with @.

let fullName = prompt("Enter yourname without anyspace");
let username = "@" + fullName + fullName.length;
console.log(username);