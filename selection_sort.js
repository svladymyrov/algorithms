/**
 * Selection sort
 * O(n^2) - average run time
 * O(n^2) - worst run time
 */

function selectionSort(array) {
  const sortedArr = [];

  for (let i = 0, arrLength = array.length; i < arrLength; i++) {
    let minValueIndex = 0;

    for (let j = 0; j < array.length; j++) {
      const element = array[j];
      if (element < array[minValueIndex]) {
        minValueIndex = j;
      }
    }

    sortedArr.push(array.splice(minValueIndex, 1)[0]);
  }

  return sortedArr;
}
