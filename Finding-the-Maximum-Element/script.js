/*
Assignment 3: Finding the Maximum Element
Objective: Use loops to find the maximum value in an array.
Task:
1. Create an array of 7 integers.
2. Populate the array with random values.
3. Write a loop to find the maximum value in the array.
4. Print the maximum value.

*/


// Create an array of 7 integers.
let numbers = [5, 3, 8, 6, 2, 7, 4];

// Populate the array with random values.
for (let i = 0; i < 7; i++) {
    numbers.push(Math.floor(Math.random() * 15));
}

// Display the array of random integers
console.log(numbers);

// Write a loop to find the maximum value in the array.
let max = numbers[0]; 

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

// Print the maximum value.
console.log("Maximum value in the array:", max);
