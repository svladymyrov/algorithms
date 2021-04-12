/**
 * Insertion sort
 * O(n^2) - average run time
 * O(n^2) - worst run time
 */

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    let j;

    for (j = i - 1; j >= 0 && array[j] > element; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = element;
  }

  return array;
}