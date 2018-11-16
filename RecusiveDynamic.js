const coins = [1, 2, 3];
let cache = {};

const makeChangeDynamic = value => {
  if (cache[value]) return cache[value];
  let minCoins = -1;
  coins.forEach(coin => {
    if (value - coin >= 0) {
      let currentMinCoins = makeChangeDynamic(value - coin);
      if (minCoins === -1 || minCoins > currentMinCoins)
        minCoins = currentMinCoins;
    }
  });
  cache[value] = minCoins + 1;
  return cache[value];
};

console.log(makeChangeDynamic(10));

const lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const prices = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
cache = {};

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
