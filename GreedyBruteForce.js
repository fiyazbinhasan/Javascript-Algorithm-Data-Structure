const makeChangeGreedy = (coins, amount) => {
  coins.sort((a, b) => b - a);
  let totalCoins = 0;
  let i = 0;
  while (amount > 0) {
    if (coins[i] <= amount) {
      amount -= coins[i];
      totalCoins++;
    } else {
      i++;
    }
  }
  return totalCoins;
};

console.log(makeChangeGreedy([1, 6, 10], 12));

const coins = [1, 2, 3];

const makeChangeBruteForce = value => {
  if (value === 0) return 0;
  let minCoins = -1;
  coins.forEach(coin => {
    if (value - coin >= 0) {
      let currentMinCoins = makeChangeBruteForce(value - coin);
      if (minCoins === -1 || minCoins > currentMinCoins)
        minCoins = currentMinCoins;
    }
  });
  return minCoins + 1;
};

console.log(makeChangeBruteForce(5));

const cache = {};

const makeChangeMemoizeBruteForce = value => {
  if (cache[value]) return cache[value];
  let minCoins = -1;
  coins.forEach(coin => {
    if (value - coin >= 0) {
      let currentMinCoins = makeChangeBruteForce(value - coin);
      if (minCoins === -1 || minCoins > currentMinCoins)
        minCoins = currentMinCoins;
    }
  });
  cache[value] = minCoins + 1;
  return cache[value];
};

console.log(makeChangeMemoizeBruteForce(5));
