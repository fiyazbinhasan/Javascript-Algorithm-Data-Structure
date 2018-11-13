const bubbleSort = arr => {
  let wall = arr.length;

  while (wall > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    wall--;
  }

  return arr;
};

console.log(bubbleSort([2, 1, 6, 2, 8, 2, 4]));
