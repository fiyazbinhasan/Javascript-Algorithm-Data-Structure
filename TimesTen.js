// const times10 = n => {
//   return n * 10;
// };
// console.log(times10(5));

// const cache = {};

// const memoTimes10 = n => {
//   if (!cache[n]) {
//     cache[n] = n * 10;
//     return cache[n];
//   } else return cache[n];
// };

// console.log(memoTimes10(5));
// console.log(memoTimes10(4));
// console.log(memoTimes10(5));

// const cache = {};

// const memoTimes10V2 = n => {
//   if (n in cache) {
//     return cache[n];
//   } else {
//     let result = n * 10;
//     cache[n] = result;
//     return result;
//   }
// };

// console.log(memoTimes10V2(5));
// console.log(memoTimes10V2(4));
// console.log(memoTimes10V2(5));

// const memoTimes10V3 = () => {
//   let cache = {};
//   return n => {
//     if (n in cache) {
//       console.log('Returning from cache');
//       return cache[n];
//     } else {
//       console.log('Storing in cache');
//       let result = n * 10;
//       cache[n] = result;
//       return result;
//     }
//   };
// };

// var memoTimes10Closure = memoTimes10V3();
// console.log(memoTimes10Closure(3));
// console.log(memoTimes10Closure(5));
// console.log(memoTimes10Closure(3));

// const memoTimesMultiplier = m => {
//   let cache = {};
//   return n => {
//     if (n in cache) {
//       console.log('Returning from cache');
//       return cache[n];
//     } else {
//       console.log('Storing in cache');
//       let result = n * m;
//       cache[n] = result;
//       return result;
//     }
//   };
// };

// var memoTimes4Closure = memoTimesMultiplier(4);
// console.log(memoTimes4Closure(3));
// console.log(memoTimes4Closure(5));
// console.log(memoTimes4Closure(3));

const memoizeCallback = cb => {
  let cache = {};
  return n => {
    if (n in cache) {
      console.log('Returning from cache');
      return cache[n];
    } else {
      console.log('Storing in cache');
      let result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

var memoCallbackClosure = memoizeCallback(n => n * 5);
console.log(memoCallbackClosure(3));
console.log(memoCallbackClosure(5));
console.log(memoCallbackClosure(3));
