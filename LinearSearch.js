// search the whole array and return the index of last matched element (worst case)

const linearSearch = (arr, item) => {
  let index = -1;
  arr.forEach((currentItem, currentIndex) => {
    if (currentItem === item) index = currentIndex;
  });
  return index;
};

console.log(linearSearch([2, 3, 5, 5, 8, 4], 5));

// search on a sorted binary tree

const binarySearch = (arr, item) => {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let pivot = Math.floor((min + max) / 2);

    if (arr[pivot] === item) return pivot;
    else {
      if (item > arr[pivot]) min = pivot + 1;
      else max = pivot - 1;
    }
  }

  return -1;
};

console.log(binarySearch([2, 4, 5, 8, 10, 20], 20));
