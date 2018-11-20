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
