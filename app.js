"use strict";
var userInput; //unknown type
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') { //need extra typecheck when assinging unknown to a fixed type
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An Error occured!', 500);
