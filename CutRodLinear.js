const lengths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const prices = [1, 5, 8, 9, 10, 17, 17, 20, 24, 30];
const maxProfitByLength = [];

lengths.unshift(0);
prices.unshift(0);

const rodCut = n => {
  for (let i = 0; i <= n; i++) maxProfitByLength.push(i);

  for (let j = 0; j <= n; j++) {
    console.log(`Outer: ${j}`);
    let maxProfit = -1;
    for (let i = 0; i <= j; i++) {
      maxProfit = Math.max(maxProfit, prices[i] + maxProfitByLength[j - i]);
      console.log(`Inner: ${i}`);
      console.log(maxProfit);
    }
    maxProfitByLength[j] = maxProfit;
  }
  return maxProfitByLength[n];
};

console.log(rodCut(4));
