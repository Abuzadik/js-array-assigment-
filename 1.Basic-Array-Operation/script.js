/* 
Assignment 1: Basic Array Operations
Objective: Understand how to create and manipulate arrays.

Task:
1. Create an array of 10 integers.
2. Populate the array with numbers 1 through 10.
3. Print all the elements of the array.
4. Change the value of the fifth element to 50 and print the updated array

*/  

//Create an array of 10 integers.
const arr = [1,2,3,4,5,6,7,8,9,10]

// Print all the elements of the array.
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

// Change the value of the fifth element to 50 and print the updated array
arr[4] = 50;
console.log(arr)