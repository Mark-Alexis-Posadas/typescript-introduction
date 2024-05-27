"use strict";
let tuple;
tuple = [1, false, "alexis"];
tuple.push("posadas");
console.log(tuple);
// let tupleReadOnly: readonly [string, number, boolean] = ["juan", 13, true];
// tupleReadOnly.push("tamad"); //Property 'push' does not exist on type 'readonly [string, number, boolean]'.ts(2339)
// console.log(tupleReadOnly);
let tupleReadOnly = ["juan", 13, true];
tupleReadOnly.push("tamad");
console.log(tupleReadOnly);
