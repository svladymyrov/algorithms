/**
 * Mergesort
 * O(n log n) - average run time
 * O(n log n) - worst run time
 */

function merge(leftArray, rightArray) {
  const totalLength = leftArray.length + rightArray.length;
  const result = [];
  while (result.length < totalLength) {
    if (!leftArray.length) {
      result.push(rightArray.shift());
      continue;
    } else if (!rightArray.length) {
      result.push(leftArray.shift());
      continue;      
    }

    if (leftArray[0] > rightArray[0]) {
      result.push(rightArray.shift());
     } else {
      result.push(leftArray.shift());
     }    
  }
  return result;
}

function mergesort(array) {
  if (array.length < 2) return array;

  const middleIndex = Math.floor((array.length - 1) / 2) || 1;
  const rightArray = array.splice(middleIndex);

  return merge(mergesort(array), mergesort(rightArray));
}
