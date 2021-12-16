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
// console.log(calculateCube(5));

// ## 3. Is a Vowel? 
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
function isAVowel(letter){
    if(letter.lowerCase === "a" || "e" || "i" || "o" || "u"){
return `${letter} is a vowel`
    } else{
        return false;
    }
}
// console.log(isAVowel("a"));

// ## 4. Get Two Lengths

// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

function getTwoLengths(word1, word2){
    return [word1.length, word2.length];
}
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// ## 5. Sum Array
// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array. **Do not use `.reduce()`**.

function sumArray(arr){
    let sum = 0;
for(let i = 0; i < arr.length; i++){
    sum += arr[i];
}
 return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));