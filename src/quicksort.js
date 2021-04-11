/**
 * Quicksort
 * O(n log n) - average run time
 * O(n^2) - worst run time
 */

function quicksort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];
  for (let i = 1; i < array.length; i++) {
    const element = array[i];
    if (element <= pivot) {
      left.push(element);
    } else {
      right.push(element);
    }
  }
  
  return [...quicksort(left), pivot, ...quicksort(right)];
}
