function findDuplicates(arr) {
  let duplicates = [];
  let seen = {};

  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];

    if (seen[currentItem] === undefined) {
      seen[currentItem] = true;
    } else if (seen[currentItem] === true) {
      duplicates.push(currentItem);
      seen[currentItem] = false;
    }
  }

  return duplicates;
}

// Test the function
// console.log(findDuplicates([1, 2, 3, 4, 5, 2, 4, 6, 7])); // Output: [2, 4]
console.log(findDuplicates(["a", "b", "c", "a", "d", "e", "b"])); // Output: ['a', 'b']
// console.log(findDuplicates([])); // Output: []
