"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var combineValues; //function type
combineValues = add;
printResult(combineValues(5, 12));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
