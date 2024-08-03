// 1-question ?????????
// 2-question

// function rangeSum(arr, start, end) {
//     let sum = 0;
    
//     for (let i = start; i <= end; i++) {
//         sum += arr[i];
//     }
    
//     return sum;
// }

// const arr = [1, 6, 9, 5, 8, 10, 15];

// const start = 2;
// const end = 5;

// const result = rangeSum(arr, start, end);
// console.log(result);  

// 2-question

// 3-question  Tushunmadim???????


// 4-question

// let arr = [2, 4, 5, 6, 6, 3, 2, 1];

// let max = arr.reduce((a, b) => Math.max(a, b));

// let min = arr.reduce((a, b) => Math.min(a, b));

// console.log("Eng katta qiymat: ", max); 
// console.log("Eng kichik qiymat: ", min); 


// 4-question


// 5-question  Savollar ro'yhatida 5-savol yozilmagan ekan!


// 6-question

// let arr = [1, 2, 3, 4, 5, 6];

// let reversedArr = arr.reverse();

// console.log(reversedArr); 

// 6-question

// 7-question

// let arr = [3, 4, 8, 34, 12, 9, 76, 50];

// let oddNumbers = arr.filter(num => num % 2 !== 0);

// console.log(oddNumbers); 

// 7-question

// 8-question

// let arr = [3, 4, 8, 34, 12, 9, 76, 50];

// let oddIndexElements = arr.filter((_, index) => index % 2 !== 0);

// console.log(oddIndexElements); 

// 8-question

// 9-question

// function maxOfOddIndex(arr) {
//     let oddIndexElements = arr.filter((_, index) => index % 2 !== 0);
    
//     if (oddIndexElements.length === 0) {
//         return null;
//     }

//     let max = oddIndexElements.reduce((a, b) => Math.max(a, b));
    
//     return max;
// }

// let arr = [3, 4, 8, 34, 12, 9, 76, 50];
// let maxOddIndexValue = maxOfOddIndex(arr);
// console.log(maxOddIndexValue); 

// 9-question

// 10-question

// function replaceBetweenMinMax(arr) {
//     let min = Math.min(...arr);
//     let max = Math.max(...arr);

//     let newArr = arr.map(num => {
//         if (num > min && num < max) {
//             return 0;
//         }
//         return num;
//     });

//     return newArr;
// }

// let inputArr = [2, 1, 3, 8, 4];
// let outputArr = replaceBetweenMinMax(inputArr);
// console.log(outputArr); 

// 10-question

// 11-question

// function generateOddNumbers(n) {
//     let oddNumbers = [];
//     for (let i = 0; i < n; i++) {
//         oddNumbers.push(2 * i + 1);
//     }
//     return oddNumbers;
// }

// let n = 5;
// console.log(generateOddNumbers(n));  

// 11-question


// 12-question

// function reverseArray(arr) {
//     let reversed = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversed.push(arr[i]);
//     }
//     return reversed;
// }

// let originalArray = [2, 34, 6, 9, 7, 12, 58];
// let reversedArray = reverseArray(originalArray);
// console.log(reversedArray); 

// 12-question


// 13-question

// function uniqueValues(arr) {
//     let uniqueArray = [];
//     let valueSet = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         if (!valueSet.has(arr[i])) {
//             uniqueArray.push(arr[i]);
//             valueSet.add(arr[i]);
//         }
//     }

//     return uniqueArray;
// }

// let inputArray = [3, 5, 6, 9, 12];
// let outputArray = uniqueValues(inputArray);
// console.log(outputArray); 

// 13-question


// 14-question

// function logEvenIndexValues(arr) {
//     for (let i = 0; i < arr.length; i += 2) {
//         console.log(arr[i]);
//     }
// }

// let inputArray = [3, 5, 6, 9, 12, 15, 18];
// logEvenIndexValues(inputArray);

// 14-question