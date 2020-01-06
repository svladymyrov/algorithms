/**
 * O(n^2) - average run time
 * O(n^2) - worst run time
 */

function bubbleSort(array) {
  let arrLength = array.length;

  for (let i = 0; i < array.length; i++) {
    let isSwiped = false;

    for (let j = 0; j < arrLength; j++) {
      const element = array[j];
      const nextElement = array[j + 1];
      if (element > nextElement) {
        isSwiped = true;
        array.splice(j, 2, array[j + 1], array[j]);
      }
    }

    if (!isSwiped) return array;
    arrLength -= 1;
  }
}
