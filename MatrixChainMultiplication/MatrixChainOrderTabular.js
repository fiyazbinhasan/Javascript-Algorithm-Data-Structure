const make2dArray = (rows, cols) => {
  let arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
};

const matrixChainOrder = p => {
  let n = p.length;
  let m = make2dArray(n, n);
  let s = make2dArray(n - 1, n - 1);

  for (let idx = 0; idx < n; idx++) m[idx][idx] = 0;

  for (let l = 2; l < n; l++) {
    for (let i = 1; i < n - l + 1; i++) {
      let j = i + l - 1;
      m[i][j] = Infinity;

      for (let k = i; k <= j - 1; k++) {
        let q = m[i][k] + m[k + 1][j] + p[i - 1] * p[k] * p[j];
        if (q < m[i][j]) {
          m[i][j] = q;
          s[i][j] = k;
        }
      }
    }
  }
  return { m, s }; // minimum number of multiplications m[1][n - 1];
};

var p = [5, 4, 6, 2, 7];
var order = matrixChainOrder(p);
console.log(`Minimum number of multiplication: ${order.m[1][p.length - 1]}`);
console.log(`Optimal Parens`);

let parens = "";

const printOptimalParens = (s, i, j) => {
  if (i == j) parens += `A${i}`;
  else {
    parens += "(";
    printOptimalParens(s, i, s[i][j]);
    parens += ".";
    printOptimalParens(s, s[i][j] + 1, j);
    parens += ")";
  }
  return parens;
};

console.log(printOptimalParens(order.s, 1, p.length - 1));
