function buildNestedObjectIterative(str) {
  const arrItems = str.split(".");
  let resultObj = {};
  let currentObj = resultObj;

  for (let index = 0; index < arrItems.length; index++) {
    currentObj[arrItems[index]] = {};
    currentObj = currentObj[arrItems[index]];
  }

  return resultObj;
}

let resultObjWithIterative = buildNestedObjectIterative(
  "one.two.three.four.five"
);

console.log(
  "Создание объекта через итирации цикла => ",
  resultObjWithIterative
);

function buildObjectReduce(str) {
  const arritems = str.split(".");

  return arritems.reduceRight((acc, item) => {
    return { [item]: acc };
  }, {});
}

let resultObjectReduce = buildObjectReduce("one.two.three.four.five");

console.log("Создание объекта через reduce => ", resultObjWithIterative);
