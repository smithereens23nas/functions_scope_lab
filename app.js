/*
1. What is the difference between a **parameter** and an **argument**?
A parameter is added to the beginning of a function as a placeholder - function name (param, param) and arguments are values you use when you invoke the function.

2. Within a function, what is the difference between **return** and **console.log**?
return saves a value that can be used later on. Console.log doesn't save anything, but prints out the result.

3. What are the implications of the ability of a function to return a value?
You can use that returned value in your other functions or later in your code.
*/

// 2.
function calculateCube(num){
    return num * num * num;
}
console.log(calculateCube(5));

// ## 3. Is a Vowel? 
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
function isAVowel(letter){
    if(letter.lowerCase === "a" || "e" || "i" || "o" || "u"){
return `${letter} is a vowel`
    } else{
        return false;
    }
}
console.log(isAVowel("a"));