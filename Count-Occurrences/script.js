/*

Assignment 5: Count Occurrences
Objective: Use nested loops to count occurrences of elements.
Task:
1. Create an array of 10 integers with some duplicate values.
2. Write a nested loop to count the number of occurrences of each unique element.
3. Print each unique element along with its count.


*/

// Create an array of 10 integers with some duplicate values.
let numbers = [1, 2, 2, 3, 4, 4, 4, 5, 5, 6,3];



// Write a nested loop to count the number of occurrences of each unique element.
let counts = {};

for (let i = 0; i < numbers.length; i++) {
    let numb = numbers[i];
    if (counts[numb] === undefined) {
        counts[numb] = 1; 
    } else {
        counts[numb]++; 
    }
}

// Print each unique element along with its count.
console.log("Occurrences........:");
for (let numb in counts) {
    console.log(numb + ": " + counts[numb]);
}
