const make2dArray = (rows, cols) => {
  let arr = new Array(rows);
  for (let i = 1; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
};

const memoizedMatrixChain = p => {
  let n = p.length - 1;
  let m = make2dArray(p.length, p.length);
  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) m[i][j] = Infinity;
  }
  return lookupChain(m, p, 1, n);
};

const lookupChain = (m, p, i, j) => {
  if (m[i][j] < Infinity) return m[i][j];
  if (i == j) m[i][j] = 0;
  else {
    for (let k = i; k <= j - 1; k++) {
      let q =
        lookupChain(m, p, i, k) +
        lookupChain(m, p, k + 1, j) +
        p[i - 1] * p[k] * p[j];
      if (q < m[i][j]) m[i][j] = q;
    }
  }
  return m[i][j];
};

console.log(memoizedMatrixChain([5, 4, 6, 2, 7]));
