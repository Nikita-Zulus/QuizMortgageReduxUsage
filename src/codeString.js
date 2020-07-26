/*
function rel(value) {
  let count = 1;
  let result = "";
  for (let i = 0; i < value.length; i++) {
    if (value[i] === value[i + 1]) {
      count++;
    } else {
      result += value[i];
      if (count > 1) {
        result += count;
      }
      count = 1;
    }
  }
  return result;
}

console.log(rel("BBBBTTTTYYYGGGYE"));
*/
/*
function getAnnagram(list) {
  list.sort();
  let arr = [];
  let count = 0;
  let result = [];
  for (let i = 0; i < list.length; i++) {
    arr.push(list[i]);
    count++;
    if (count === 2) {
      result.push(arr);
      count = 0;
      arr = [];
    }
  }
  return result;
}

let enterList = [
  "кот",
  "пила",
  "барокко",
  "стоп",
  "ток",
  "кошка",
  "липа",
  "коробка",
  "пост",
];
console.log(getAnnagram(enterList));
*/
/*
function uniq(values) {
  let uniq = new Set(values);
  let result = [];
  for (let x of uniq) {
    result.push(x);
  }
  return result;
}

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));
*/
/*
function intersection(left, right) {
  let result = [];
  for (let x of left) {
    for (let y of right) {
      if (x === y) {
        result.push(x);
      }
    }
  }
  return result;
}

console.log(intersection([1, 2, 3, 4, 5], [2, 8, 3]));
*/
/*
function isIsomorphic(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  let map1 = {};
  let map2 = {};

  for (let i = 0; i < left.length; i++) {
    if (
      typeof map1[left[i]] == "undefined" &&
      typeof map2[right[i]] == "undefined"
    ) {
      map1[left[i]] = right[i];
      map2[right[i]] = left[i];
    } else {
      if (map1[left[i]] !== right[i] && map2[right[i]] !== left[i]) {
        return false;
      }
    }
  }
  return true;
}

console.log("egg -> add:", isIsomorphic("egg", "add")); // true
console.log("paper -> title:", isIsomorphic("paper", "title")); // true
console.log("kick -> side:", isIsomorphic("kick", "side")); // false
*/
/*
function isBalanced(input) {
  let countLeft = 0;
  let countRight = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "{") {
      countLeft++;
    }
    if (input[i] === "}") {
      countRight++;
    }
  }
  if (countLeft % 2 === 0 && countRight % 2 === 0) {
    return true;
  }
  return false;
}

console.log("balanced:", isBalanced("{{}{}}{}")); // true
console.log("not balanced:", isBalanced("{}{{}")); // false
*/
/*
function isPalindrome(value) {
  let result = value.toLowerCase();
  let first = result.split(" ").join("").split("");
  const str1 = first.join("");
  const str2 = first.reverse().join("");
  return str1 === str2;
}

console.log(isPalindrome("abcd")); // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
*/
/*
function calc(input) {
  let arr = input.split(" ");
  let arr2 = input.split(" ");
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "+" && arr[i] !== "-" && arr[i] !== "/" && arr[i] !== "*") {
      console.log("number");
      numbers.push(arr[i]);
      if (
        arr[i + 1] === "+" ||
        arr[i + 1] === "-" ||
        arr[i + 1] === "/" ||
        arr[i + 1] === "*"
      ) {
        const change = arr2[i + 1];
        const changeTo = arr2[i];
        arr2[i + 1] = arr[i];
        arr2[i] = arr[i + 1];
        console.log(change, changeTo);
      }
    } else {
      console.log("item");
    }
   
  }
  console.log(numbers, arr2);
}
*/
/*
function StringCalc(input) {
  let arr = input.split(" ");
  console.log(arr);
  let result = "";
  let countNum = 0;
  let countSign = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] !== "+" &&
      arr[i] !== "-" &&
      arr[i] !== "/" &&
      arr[i] !== "*" &&
      countNum === 0
    ) {
      result += arr[i];

      countNum++;
      arr.splice(i, 1);
    }

    if (
      (arr[i] === "+" || arr[i] === "-" || arr[i] === "/" || arr[i] === "*") &&
      arr[i + 1] !== "+" &&
      arr[i + 1] !== "-" &&
      arr[i + 1] !== "/" &&
      arr[i + 1] !== "*" &&
      countSign === 0
    ) {
      result += " ";
      result += arr[i];
      result += " ";
      countSign++;
      arr.splice(i, 1);
    }
  }
  if (input === "") {
    return "";
  }

  result += StringCalc(arr.join(" "));
  console.log(result);
  return result;
}
function calc(input) {
  const z = StringCalc(input);
  let newArr = z.split(" ");
  console.log(newArr);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "*" || newArr[i] === "/") {
      newArr[i - 1] = "(" + newArr[i - 1];
      newArr[i + 1] = newArr[i + 1] + ")";
    }
  }
  console.log(newArr.join(""));
  console.log(newArr);
  return eval(newArr.join(""));
}
console.log(calc("4 7 + 1 -")); // (4 + 7) - 1 = 10
console.log(calc("3 6 8 * + 10 -")); // 3 + (6 * 8) - 10 = 41
console.log(calc("12 8 5 - / 5 2 * + 14 /"));
console.log(calc("10 5 / 2 10 + - -0.5 *"));
*/
/*
function zip(...values) {
  let arr = [...values].sort((a, b) => a - b);
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] - arr[i - 1] > 1 ||
      arr[i] - arr[i - 1] === undefined ||
      isNaN(arr[i] - arr[i - 1])
    ) {
      result.push(arr[i]);
      count = 0;
    } else {
      if (count === 0) {
        result[result.length - 1] += "-";
      }
      count++;
      if (arr[i + 1] - arr[i] > 1 || isNaN(arr[i + 1] - arr[i])) {
        result[result.length - 1] += arr[i];
      }
    }
  }
  return result.join(",");
}

console.log(zip(3, 2, 1, 5, 6, -1, 10)); // "-1,1-3,5-6,10"
console.log(zip(3, 2, 1, 5, 6, -1, 10)); // "-1,1-3,5-6,10" === "-1,1-3,5-6,10"
console.log(zip(0, 1, 2, 3, 4, 7, 8, 10)); //  "0-4,7-8,10" === "0-4,7-8,10"
console.log(zip(4, 7, 10)); //  "4,7,10" === "4,7,10"
console.log(zip(2, 3, 8, 9)); //  "2-3,8-" === "2-3,8-9"
console.log(zip(1, 2, 3, 4, 6, 7)); //  "1-4,6-" === "1-4,6-7"
*/
/*
function solve(a, b) {
  let resCount = 0;
  if (a.length === 0) {
    return 1;
  }
  for (let j = 0; j < b.length; j++) {
    //console.log("inCicle ----------- ", a, "index---", j, b, b[j], resCount);

    let firstChar = a[0];
    if (firstChar === b[j]) {
      console.log("inCicleIf --- ", a, "index---", j, b, b[j], resCount);
      resCount += solve(a.slice(1), b.slice(j + 1));
    }
  }
  //console.log("outOfCicle --- ", a, b, resCount);
  return resCount;
}

solve("zaz", "zazapulz"); // 4 ZAZapulz, ZAzapulZ, ZazApulZ, zaZApulZ
//solve("rat", "ratatoulie"); //3
//solve("kata", "katakatak"); // 7
//solve("code", "codeodecode"); //11
*/
/*
[0,1,2]
[0,1,7]
[0,3,7]
[2,3,7]
*/
/*
function isMono(...values) {
  let countPositive = 0;
  let countNegative = 0;
  for (let i = 0; i < values.length; i++) {
    if (values[i + 1] - values[i] > 0) {
      countPositive++;
    }
    if (values[i + 1] - values[i] < 0) {
      countNegative++;
    }
  }
  if (countPositive !== 0 && countNegative !== 0) {
    return false;
  }
  return true;
}

console.log(isMono(0, 1, 5, 9, 15)); // === true
console.log(isMono(0, 1, 1, 5, 9, 9, 15)); // === true
console.log(isMono(15, 8, 4, 2, 1)); // === true
console.log(isMono(0, 1, 5, 15, 4)); // === false
*/
/*
function get(src, path) {
  let arr = [src, ...path.split(".")];
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = result[arr[i]];
  }
  return result;
}

var fixture = {
  foo: {
    bar: [{ qux: "bingo" }],
  },
};

// Проверка
console.log(get(fixture, "foo.bar.0.qux") === "bingo");
*/
/*
function missing(values) {
  values.sort();
  for (let i = 0; i < values.length; i++) {
    if (values[i + 1] - values[i] > 1) {
      return values[i] + 1;
    }
  }
}

console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined
*/
/*
function asyncReduce(input, iterator, initialValue) {
  const result = [];
  let start = new Promise((r) => r());
  for (let promise of input) {
    //промис start ждёт пока все промисы выполнятся
    start = start.then(() =>
      promise().then((number) => {
        result.push(number);
      })
    );
  }
  return start
    .then(() => result.reduce(iterator, initialValue))
    .catch((err) => {
      throw err;
    });
}

let a = () => Promise.resolve("a");
let b = () => Promise.resolve("b");
let c = () => new Promise((resolve) => setTimeout(() => resolve("c"), 100));

asyncReduce([a, c, b], (acc, value) => [...acc, value], ["d"]).then(
  (results) => {
    console.log(results); // ['d', 'a', 'c', 'b'];
  }
);
*/
/*
function now(v) {
  return Date.now();
}

console.log(now("+30min")); // Date.now() + 30 * 60 * 1000
*/
