/**
 * Insertion sort
 * O(n^2) - average run time
 * O(n^2) - worst run time
 */

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    for (let j = i - 1; j >= 0; j--) {
      const sortedElem = array[j];
      const isLastElem = j === 0;

      if (element > sortedElem) {
        array.splice(i, 1);
        array.splice(j + 1, 0, element)
        break;
      }
      if (isLastElem && element <= sortedElem) {
        array.splice(i, 1);
        array.unshift(element);
      }
    }
  }

  return array;
}
