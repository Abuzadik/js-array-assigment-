/*
Task:
1. Create a 3x3 matrix (2D array) of integers.
2. Populate the matrix with values from 1 to 9.
3. Write a nested loop to print the matrix in a 3x3 grid format.
4. Write another nested loop to calculate the sum of the diagonal elements (top-left to bottom-right).
*/

// Create a 3x3 matrix (2D array) of integers.
let matr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 6, 9]
];

// Display the matr
console.log("Matr:");
for (let i = 0; i < matr.length; i++) {
    for (let j = 0; j < matr[i].length; j++) {
        process.stdout.write(matr[i][j] + " ");
    }
    console.log(i); 
}

// Write another nested loop to calculate the sum of the diagonal elements (top-left to bottom-right).
let diagonalSum = 0;
for (let i = 0; i < matr.length; i++) {
    diagonalSum += matr[i][i];
}

// Print the diagonal sum.
console.log("Sum of diagonal:", diagonalSum);
