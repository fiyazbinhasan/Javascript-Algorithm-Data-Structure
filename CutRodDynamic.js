const lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const prices = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
const cache = {};

const cutRod = (prices, n) => {
  if (cache[n]) return cache[n];
  let maxProfit = -1;
  if (n == 0) maxProfit = 0;
  for (let i = 1; i <= n; i++) {
    maxProfit = Math.max(maxProfit, prices[i - 1] + cutRod(prices, n - i));
  }
  cache[n] = maxProfit;
  return cache[n];
};

console.log(cutRod(prices, 5));
