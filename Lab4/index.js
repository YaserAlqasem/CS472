let max = (a, b) => (a > b ? a : b);

let maxOfThree = (a, b, c) => Math.max(a, b, c);

let isVowel = (str) => {
  if (str.length !== 1) return false;
  let vowelsArray = ["a", "e", "i", "o", "u", "y"];
  if (vowelsArray.includes(str.toLowerCase())) return true;

  return false;
};

let sum = (arr) => arr.reduce((a, b) => (a += b), 0);

let multiply = (arr) => arr.reduce((a, b) => (a *= b), 1);

let reverse = (str) => {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  return reverseStr;
};

let findLongestWord = (arr) =>
  arr.reduce((a, b) => (a.length > b.length ? a : b)).length;

let filterLongWords = (arr, i) => arr.filter((x) => x.length > i);

// jsfiddle code
const a = [1, 3, 5, 3, 3];

const b = a.map(function (elem, i, array) {
  return elem * 10;
});
document.writeln(b.toString() + "<br/>");

const c = a.filter(function (elem, i, array) {
  return elem == 3;
});
document.writeln(c.toString() + "<br/>");

const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue + elem;
});
document.writeln(d + "<br/>");

// My Test Function
let myFunctionTest = (expectedValue, actualValue) => {
  if (Array.isArray(expectedValue) || typeof expectedValue === "object") {
    return arrayEquals(expectedValue, actualValue)
      ? "TEST SUCCEEDED"
      : "TEST FAILED";
  } else {
    return expectedValue == actualValue ? "TEST SUCCEEDED" : "TEST FAILED";
  }
};

function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

let exeFun = () => {
  console.log(
    "Expected output of max(20,10) is 20 " + myFunctionTest(20, max(20, 10))
  );
  console.log(
    "Expected output of maxThree(5,4,44) is 44 " +
      myFunctionTest(44, maxOfThree(5, 4, 44))
  );
  console.log(
    "Expected output of maxThree(5,4,55) is 4 " +
      myFunctionTest(4, maxOfThree(5, 4, 55))
  );
  console.log(
    "Expected output of isVowel(a) is true " +
      myFunctionTest(true, isVowel("a"))
  );
  console.log(
    "Expected output of sum([1,2,3,4]) is 10 " +
      myFunctionTest(10, sum([1, 2, 3, 4]))
  );
  console.log(
    "Expected output of multiply([1,2,3,4]) is 24 " +
      myFunctionTest(24, multiply([1, 2, 3, 4]))
  );
  console.log(
    "Expected output of reverse([1,2,3,4]) is ratset gaj " +
      myFunctionTest("ratset gaj", reverse("jag testar"))
  );
  console.log(
    "Expected output of findLongestWord([testtest, test, te]) is 8 " +
      myFunctionTest(8, findLongestWord(["testtest", "test", "te"]))
  );
  console.log(
    "Expected output of filterLongWords([testtest, test, te], 5) is [testtest] " +
      myFunctionTest(
        ["testtest"],
        filterLongWords(["testtest", "test", "te"], 5)
      )
  );
};

window.onload = exeFun;
