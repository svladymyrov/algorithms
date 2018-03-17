function findSmallest(arr) {
  let smallest = arr[0]; // Stores the smallest value
  let smallest_i = 0; // Stores the index of the smallest value
  
  arr.forEach((element, index) => {
   if (index > 0 && element < smallest) {
    smallest = element;
    smallest_i = index;
   }
  });

  return smallest_i;
}

function selectionSort(arr) {
  let newArr = [];

  [...arr].forEach((element) => {
    const smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  });

  return newArr;
}

// console.log(selectionSort([8,3,7,1,65,10,4,5,2]));

module.exports = selectionSort;