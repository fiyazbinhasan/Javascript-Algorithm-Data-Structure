const coins = [1, 6, 10];

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

console.log(makeChangeBruteForce(12));
