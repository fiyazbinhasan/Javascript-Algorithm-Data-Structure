const make2dArray = (rows, cols) => {
  const arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
};

const longestCommonSubSequence = (x, y) => {
  const m = x.length;
  const n = y.length;

  const b = make2dArray(m + 1, n + 1);
  const c = make2dArray(m + 1, n + 1);

  for (let i = 0; i <= m; i++) {
    c[i][0] = 0;
  }

  for (let j = 0; j <= n; j++) {
    c[0][j] = 0;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (x[i - 1] == y[j - 1]) {
        c[i][j] = c[i - 1][j - 1] + 1;
        b[i][j] = "↖";
      } else if (c[i - 1][j] >= c[i][j - 1]) {
        c[i][j] = c[i - 1][j];
        b[i][j] = "↑";
      } else {
        c[i][j] = c[i][j - 1];
        b[i][j] = " ";
      }
    }
  }

  return { c, b };
};

const x = ["A", "B", "C", "B", "D", "A", "B"];
const y = ["B", "D", "C", "A", "B", "A"];
const { c, b } = longestCommonSubSequence(x, y);

console.log(`Longest common sub-sequence length: ${c[x.length][y.length]}`);

let sequence = "";
const printLongestCommonSubSequence = (b, x, i, j) => {
  if (i == 0 || j == 0) {
    return;
  }
  if (b[i][j] == "↖") {
    printLongestCommonSubSequence(b, x, i - 1, j - 1);
    sequence += x[i - 1];
  } else if (b[i][j] == "↑") printLongestCommonSubSequence(b, x, i - 1, j);
  else printLongestCommonSubSequence(b, x, i, j - 1);
  return sequence;
};

console.log(
  `Longest common sub-sequence ${printLongestCommonSubSequence(
    b,
    x,
    x.length,
    y.length
  )}`
);
