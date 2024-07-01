/*

Assignment 2: Summing Array Elements
Objective: Use loops to iterate over an array.
Task:
1. Create an array of 5 floating-point numbers.
2. Populate the array with any values of your choice.
3. Write a loop to calculate the sum of all elements in the array.
4. Print the sum.

*/

// Create an array of 5 floating-point numbers.
let numbers = [3.5, 2.1, 6.7, 9.8, 4.2];

// Populate the array with any values of your choice.

//  Write a loop to calculate the sum of all elements in the array.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

// 4. Print the sum.
console.log("Sum of the elements:", sum);
