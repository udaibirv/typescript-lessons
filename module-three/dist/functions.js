"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
let combineValues; //function type
combineValues = add;
printResult(combineValues(5, 12));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
