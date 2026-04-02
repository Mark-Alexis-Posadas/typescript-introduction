"use strict";
function getFirstElement(arr) {
    return arr[0];
}
let firstNum = getFirstElement([1, 2, 3]); // Type is inferred as number
let firstStr = getFirstElement(["a", "b", "c"]); // Type is inferred as string
console.log(firstNum, firstStr);
