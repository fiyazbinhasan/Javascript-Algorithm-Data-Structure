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

