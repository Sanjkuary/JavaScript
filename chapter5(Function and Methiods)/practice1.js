//                      Question1.
// Create a function using the "function keyword that takes a string as an argument and returns the number of vowels in the string.
function countVowels (str) {
    let count = 0;
    for (const char of str){
        if (char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
        
    }

    // console.log(count);
    return count;
}



function countConsonants(str) {
    let count = 0;
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (!vowels.includes(char) && /[a-zA-Z]/.test(char)) {
            count++;
        }
    }
    return count;
}



//                          Question 2.
//        Create an arrow function to perform the upper task.

const countvow = (str) => {
    let count = 0;
    for (const char of str){
        if (char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
        
    }

    // console.log(count);
    return count;
};

