const uniqueSort = function(arr) {
  const cache = { [arr[0]]: true };
  const result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (!cache[arr[i]]) {
      cache[arr[i]] = true;
      result.push(arr[i]);
    }
  }
  return result.sort((a, b) => a - b);
};

console.log(uniqueSort([1, 6, 2, 1, 4, 5, 2, 3]));
