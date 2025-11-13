function buildNestedObjectIterative(str) {
  if (str.trim() === "") return "Указанна пустая строка";

  const arrItems = str.split(".");
  let resultObj = {};
  let currentObj = resultObj;

  for (item of arrItems) {
    currentObj[item] = {};
    currentObj = currentObj[item];
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
  if (str.trim() === "") return "Указанна пустая строка";

  const arritems = str.split(".");
  return arritems.reduceRight((acc, item) => {
    return { [item]: acc };
  }, {});
}

let resultObjectReduce = buildObjectReduce(" ");

console.log("Создание объекта через reduce => ", resultObjectReduce);
