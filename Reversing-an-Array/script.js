/*
Assignment 4: Reversing an Array
Objective: Practice manipulating arrays with loops.
Task:
1. Create an array of 6 characters.
2. Populate the array with the characters of your choice.
3. Write a loop to reverse the elements of the array.
4. Print the reversed array.


*/

// Create an array of 6 characters.
let characters = ['a', 'b', 'c', 'd', 'e', 'f'];

//  Display the original array
console.log("Original Array:", characters);

// Write a loop to reverse the elements of the array.
let reversedArray = [];
for (let i = characters.length - 1; i >= 0; i--) {
    reversedArray.push(characters[i]);
}

// Print the reversed array.
console.log("Reversed Array:", reversedArray);
