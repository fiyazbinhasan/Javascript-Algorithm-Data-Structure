function uniqueV1(arr) {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    console.log(`===== Outer loop ===== i == ${i}`);
    for (let j = 0; j < arr.length; j++) {
      console.log(`===== Inner loop ===== j == ${j}`);
      if (i !== j && arr[i] == arr[j]) {
        result = false;
      }
    }
  }
  return result;
}

console.log(uniqueV1([1, 2, 3]));
console.log(uniqueV1([1, 1, 2])); // best case
console.log(uniqueV1([1, 2, 2])); // worst case

function uniqueV2(arr) {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    console.log(`===== Outer loop ===== i == ${i}`);
    for (let j = 0; j < arr.length; j++) {
      console.log(`===== Inner loop ===== j == ${j}`);
      if (i !== j && arr[i] == arr[j]) {
        result = false;
        break;
      }
    }
    if (result == false) break;
  }
  return result;
}

console.log(uniqueV2([1, 2, 3]));
console.log(uniqueV2([1, 1, 2])); // best case
console.log(uniqueV2([1, 2, 2])); // worst case

function uniqueV3(arr) {
  let cache = {};
  var result = true;

  for (let i = 0; i < arr.length; i++) {
    console.log(`===== Outer loop ===== i == ${i}`);
    if (cache[arr[i]]) {
      result = false;
    } else {
      cache[arr[i]] = true;
    }
  }
  return result;
}

console.log(uniqueV3([1, 2, 3]));
console.log(uniqueV3([1, 1, 2])); // best case
console.log(uniqueV3([1, 2, 2])); // worst case
