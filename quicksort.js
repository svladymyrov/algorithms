/**
 * O(n log n) - average run time
 * O(n^2) - worst run time
 */

function quicksort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const [, ...newArr] = arr;
  const less = newArr.filter(n => n <= pivot);
  const great = newArr.filter(n => n > pivot);
  return quicksort(less).concat([pivot], quicksort(great));
}

// console.log(quicksort([34,5,7,12,99,3]));
