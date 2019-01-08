/**
 * Selection sort
 * O(n^2)
 */

const array = [34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123,34,5,7,7,12,99,3,4,54,67,888,456,44,321,2,9,6,24,87,6541,0,67,76,79,98,123,321,231,132,2123];

// const array = [6,8,4,5,0,56,101];

function findSmallest(arr) {
  let smallest = arr[0]; // Stores the smallest value
  let smallest_i = 0; // Stores the index of the smallest value

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (index > 0 && element < smallest) {
      smallest = element;
      smallest_i = index;
     }      
  }
  
  return smallest_i;
}

function selectionSort(arr) {
  let sortedArr = [];

  for (let arrLength = arr.length, index = 0; index < arrLength; index++) {
    const smallest = findSmallest(arr);
    sortedArr.push(arr.splice(smallest, 1)[0]);
  }

  return sortedArr;
}

console.time('selectionSort')
console.log(selectionSort(array));
console.timeEnd('selectionSort');

module.exports = selectionSort;