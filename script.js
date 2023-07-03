// Problem Statement: Write a JavaScript function called calculateAverage that takes an array of numbers as an argument and returns the average of those numbers. The function should calculate the sum of all the numbers in the array and divide it by the total number of elements. Make sure to handle empty arrays and return 0 in such cases.

const calculateAverage = arr => {
  let index = 0;
  let average = 0;
  let sum = 0;
  arr.map(element => {
    sum += element;
    index++;
  });
  if (arr.length !== 0) {
    average = sum / index;
    return average;
  } else {
    return 0;
  }
};

// console.log(calculateAverage([1, 2, 3, 4, 5]));
// console.log(calculateAverage([10, 20, 30, 40, 50]));
console.log(calculateAverage([])); // Output: 0
