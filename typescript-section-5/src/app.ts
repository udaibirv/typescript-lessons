//Interface describes the structure of an ojbect
//Pure TS feature. Force classes to have certain features, can be used as funtions
//can use optional parameters or methods using ?
//Nothing is compiled into vanilla JS
//Clearly describes the idea of how an object should look like
//use to describe what an object should look like
//can only be used for objects
//no implemtnation details  compared to abstract classes
//share functionality across different classes, structure (features) of the different classes

interface AddFn {
  (a: number, b:number): number; //interface as an anonymous function
}

let add: AddFn;



interface Named {
  readonly name?: string;
  outputName?: string; //? makes the parameter optional
}


interface Greetable extends Named{
  // readonly name: string; //must only be set once, can't be changed after object intilization
  // age: number;

  greet(phrase: string):void;
}

class Person implements Greetable{ //need name and age property, greet method to implement Greetable
  name?: string;
  age = 30;
  constructor(n?: string){
    if(n){
      this.name = n;
    }
  }
  greet(phrase: string) {
    if(this.name){
      console.log(phrase + ' ' + this.name)
    }else{
      console.log('Hi!');
    }
  }
}

let user1: Greetable;

user1 = new Person();
console.log(user1);

// user1.greet('Hi there- I am');
// console.log(user1);
