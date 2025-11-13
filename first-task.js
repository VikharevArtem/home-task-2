function sumClosure(initialValue = 0) {
  let totalSum = initialValue;
  function innerFn(nextValue) {
    totalSum += nextValue;
    return innerFn;
  }

  innerFn.valueOf = () => totalSum;

  return innerFn;
}

let resultSumClosure = sumClosure(2)(3)(5)(4);

console.log("Сумма через замыкание => " + resultSumClosure);

function sumRecursive(value) {
  const innerFn = function (nextValue) {
    if (nextValue === undefined) {
      return value;
    }
    return sumRecursive(value + nextValue);
  };

  innerFn.valueOf = () => value;

  return innerFn;
}

let resultSumRecursive = sumRecursive(1)(2)(3)(4)(5);

console.log("Сумма через рекурсию  => " + resultSumRecursive);
