/*
1. What is the difference between a **parameter** and an **argument**?
A parameter is added to the beginning of a function as a placeholder - function name (param, param) and arguments are values you use when you invoke the function.

2. Within a function, what is the difference between **return** and **console.log**?
return saves a value that can be used later on. Console.log doesn't save anything, but prints out the result.

3. What are the implications of the ability of a function to return a value?
You can use that returned value in your other functions or later in your code.
*/

// 2.
function calculateCube(num) {
  return num * num * num;
}
// console.log(calculateCube(5));

// ## 3. Is a Vowel?
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
function isAVowel(letter) {
  if (letter.lowerCase === "a" || "e" || "i" || "o" || "u") {
    return `${letter} is a vowel`;
  } else {
    return false;
  }
}
// console.log(isAVowel("a"));

// ## 4. Get Two Lengths

// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

function getTwoLengths(word1, word2) {
  return [word1.length, word2.length];
}
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// ## 5. Sum Array
// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array. **Do not use `.reduce()`**.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5, 6]));

// ### Step One
// Write a function called `checkPrime` that will test whether a number is Prime. The function will return true (Boolean) if Prime, false if not.
// _Hint:_ Check every number up to the square root. To do this, try a _for loop_.

// ### Step Two
// Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
// This function can **call on** the previous `checkPrime` function.
// </details>
function checkPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(checkPrime(47));

function printPrimes(num1) {
  for (let i = 2; i < num1; i++) {
    // console.log(i);
    if (checkPrime(i)) {
      console.log(i);
    }
  }
}

// printPrimes(97);

// ## 7. Print Longest Word

// Write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(word) {
  let temp = word[0];
  for (let i = 0; i < word.length; i++) {
    if (word[i].length > temp.length) {
      temp = word[i];
    }
  }
  return temp;
}
// console.log(printLongestWord(["BoJack","Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

// > => "Peanutbutter

// ## Project Euler Problem
// [Project Euler problem #2](https://projecteuler.net/problem=2)

// * Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.

// * Adjust the function to push the **even numbered** values into an array.

// * Adjust the function to return the summed value of the array.

// * Find the sum of the even numbered values that do not exceed four million.

function eulerProblem(num) {
  let eulerStart = [1, 1];
  let even = 0;
  let newNumber = 0;
  while (newNumber < num) {
    newNumber =
      eulerStart[eulerStart.length - 1] + eulerStart[eulerStart.length - 2];
    if (newNumber < num) {
      eulerStart.push(newNumber);
      if (eulerStart.length % 3 === 0) {
        even += newNumber;
      }
    }
    console.log(newNumber);
  }
  console.log(even);
  console.log(eulerStart);
  return even;
}
// console.log(eulerProblem(10));

// ## A Needle in the Haystack

// [From Codewars](https://www.codewars.com/kata/56676e8fabd2d1ff3000000c) [Join CodeWars](www.codewars.com/r/bEqEeQ)

// Can you find the needle in the haystack?

// Write a function `findNeedle()` that takes an array full of junk but contains one `"needle"`

// After your function finds the needle it should return a message (as a string) that says:

// `"found the needle at postition"` plus the index it found the needle so:

// `find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])`

// Should return:

// `"found the needle at position 5"`

function findNeedle(needle) {
  for (let i = 0; i < needle.length; i++) {
    if (needle[i].toLowerCase() === "needle") {
      return "found the needle at position " + i;
    }
  }
}

// console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'Needle', 'randomJunk']));

// ## Sum the Positive

// [From Codewars](https://www.codewars.com/kata/5715eaedb436cf5606000381)

// Given an array, return the sum of only the positive numbers

function sumOfPositives(num) {
  let sum = 0;
  for(let i = 0; i < num.length; i++){
    if(num[i] > 0) {
     sum += num[i];
  }
  
  }
  return sum;
}

// console.log(sumOfPositives([1]));
console.log(sumOfPositives([1, -4, 7, 12]));
