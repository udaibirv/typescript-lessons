let userInput: unknown; //unknown type
let userName: string;

userInput = 5;
userInput = 'Max';
if(typeof userInput === 'string'){ //need extra typecheck when assinging unknown to a fixed type
  userName = userInput;
}

function generateError(message: string , code: number): never{  //throw will cancel our script so return value will NEVER occur
  throw {message: message, errorCode: code};
}

generateError('An Error occured!', 500);
