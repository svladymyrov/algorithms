function insertionSort(array) {
  const sortedArr = array.splice(0, 1);
  for (let i = 0, arrayLength = array.length; i < arrayLength; i++) {
    const element = array[i];
    console.log('array: ', array);
    console.log('sortedArr', sortedArr);
    console.log('elem: ', element);
    for (let j = sortedArr.length - 1; j >= 0; j--) {
      const sortedElem = sortedArr[j];
      console.log('sortEl: ', sortedElem);
      if (element > sortedElem) {
        sortedArr.splice(j + 1, 0, array.splice(i, 1)[0]);
      }
    }
  }

  return sortedArr;
}

const result = insertionSort([4,7,2,1,3,5,6]);
console.log(result);
