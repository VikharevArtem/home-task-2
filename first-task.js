function sumClosure(initialValue = 0) {
  let totalSum = initialValue;
  function innerFn(nextValue) {
    totalSum += nextValue;
    return innerFn;
  }

  innerFn.valueOf = () => totalSum;
  // innerFn.toString = () => totalSum.toString();

  return innerFn;
}

let resultSumClosure = Number(sumClosure(2)(3)(5));

console.log(resultSumClosure);
