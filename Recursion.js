const loopNTimes = n => {
  if (n <= 1) {
    console.log(1);
    //return; // explicit return
  } else {
    loopNTimes(n - 1);
    console.log(n);
    //return; // explicit return
  }
};

// ==== Stack ====
// loopNTimes(1); 5th (n = 1 && n == 1) so pop and log 1;
// loopNTimes(2); 4th (n = 2 && n != 1)
// loopNTimes(3); 3rd (n = 3 && n != 1)
// loopNTimes(4); 2nd (n = 4 && n != 1)
// loopNTimes(5); 1st (n = 5 && n !== 1)

// ==== Stack ====
// loopNTimes(2); 4th (n = 2) pop and start where it was left off (log 2);
// loopNTimes(3); 3rd (n = 3)
// loopNTimes(4); 2nd (n = 4)
// loopNTimes(5); 1st (n = 5)

// ==== Stack ====
// loopNTimes(3); 3rd (n = 3) pop and start where it was left off (log 3);
// loopNTimes(4); 2nd (n = 4)
// loopNTimes(5); 1st (n = 5)

// ==== Stack ====
// loopNTimes(4); 2nd (n = 4) pop and start where it was left off (log 4)
// loopNTimes(5); 1st (n = 5)

// ==== Stack ====
// loopNTimes(5); 1st (n = 5)pop and start where it was left off (log 5)

// ==== Stack ====
// empty stack exit the program;

loopNTimes(5);

const loopRange = (min, max) => {
  if (min == max) {
    console.log(min);
  } else {
    console.log(min);
    loopRange(min + 1, max);
  }
};

loopRange(1, 5);

const loopRangeV2 = (start, end) => {
  function recursive(current) {
    console.log(current);
    if (current < end) {
      recursive(current + 1);
    }
  }
  recursive(start);
};

loopRangeV2(1, 5);

const joinElements = (elements, token) => {
  let length = elements.length;
  let index = 0;

  function recursion(current, accumulator) {
    if (index < length - 1) {
      accumulator = accumulator.concat(current + token);
      index++;
      recursion(elements[index], accumulator);
    } else {
      console.log(accumulator.concat(elements[index++]));
    }
  }
  recursion(elements[index], '');
};

joinElements(['H', 'r', ' is your s', 'cr', 't cod', ' :) :)'], 'e');

const joinElementsV2 = (elements, token) => {
  function recursion(index, accumulator) {
    accumulator += elements[index];
    if (index === elements.length - 1) {
      return accumulator;
    } else {
      return recursion(index + 1, accumulator + token);
    }
  }
  return recursion(0, '');
};

console.log(
  joinElementsV2(['H', 'r', ' is your s', 'cr', 't cod', ' :) :)'], 'e')
);

const factorial = n => {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const factorialMemoization = () => {
  let cache = {};
  return n => {
    if (!cache[n]) {
      console.log('Storing in cache');
      cache[n] = factorial(n);
      return cache[n];
    } else {
      console.log('Returning from cache');
      return cache[n];
    }
  };
};

var fact = factorialMemoization();
console.log(fact(5));
console.log(fact(3));
console.log(fact(5));

const factorialMemoizationWithCallback = cb => {
  let cache = {};
  return n => {
    if (n in cache) {
      console.log('Returning from cache');
      return cache[n];
    } else {
      console.log('Storing in cache');
      result = cb(n);
      cache[n] = result;
      return result;
    }
  };
};

const memoFactorial = factorialMemoizationWithCallback(factorial);
console.log(memoFactorial(5));
console.log(memoFactorial(3));
console.log(memoFactorial(5));
