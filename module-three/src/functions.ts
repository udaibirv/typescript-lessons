function add (n1: number, n2: number): number //this is return type*/
{
  return n1 + n2;
}

function printResult (num: number){
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void){
  const result = n1 + n2;
  cb(result);
}

let combineValues: (a: number, b: number) => number; //function type

combineValues = add;

printResult(combineValues(5, 12));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
