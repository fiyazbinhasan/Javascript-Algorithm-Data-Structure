const binarySearch = (arr, item) => {
  function recursive(min, max) {
    if (min > max) {
      return -1;
    } else {
      let pivot = Math.floor((min + max) / 2);
      if (arr[pivot] === item) return pivot;
      else {
        if (item > arr[pivot]) return recursive(pivot + 1, max);
        else return recursive(min, pivot - 1);
      }
    }
  }
  return recursive(0, arr.length - 1);
};

console.log(binarySearch([2, 4, 5, 8, 10, 20], 0));

const mergeSort = arr => {
  if (arr.length === 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort([1, 4, 2, 5, 0]));
