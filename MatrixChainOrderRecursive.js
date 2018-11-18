const matrixChainOrder = (p, i, j) => {
  if (i == j) return 0;
  let m = Infinity;
  for (let k = i; k < j; k++) {
    let q =
      matrixChainOrder(p, i, k) +
      matrixChainOrder(p, k + 1, j) +
      p[i - 1] * p[k] * p[j];
    if (q < m) m = q;
  }
  return m;
};

const p = [5, 4, 6, 2, 7];
console.log(matrixChainOrder(p, 1, p.length - 1));
