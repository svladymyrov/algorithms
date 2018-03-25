/**
 * O(log n)
 */

function binary_search(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    const guess = arr[mid];

    if (guess === item) { return mid; }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return 'None!';
}

// console.log(binary_search([5,6,7,8,12,32,88,101], 101));
