//String



const exampleVar = "Hello world!";
console.log(exampleVar);

// Simple Strings
const singleQuotes = 'Single Quote Example';
console.log(singleQuotes);
const doubleQuotes = 'Double Quote Example';
console.log(doubleQuotes);

//Complex String
const userName = "jane";
const backticks = `Hello, ${userName}`;
console.log(backticks);

const value1 = `2+2`;
console.log(value1);
const value2 = `${2 + 2}`;
console.log(value2);

//typeof 
console.log(typeof singleQuotes);





// Number
const wholeNum = 10;
const decimalNum = 10.5;
console.log(wholeNum);
console.log(decimalNum);

const firstNum = 2;
const secondNum = 3;
const result1 = firstNum + secondNum; console.log("result1 is = " + result1);
const result2 = firstNum - secondNum; console.log("result2 is = " + result2);
const result3 = firstNum * secondNum; console.log("result3 is = " + result3);
const result4 = firstNum / secondNum; console.log("result4 is = " + result4);
const result5 = firstNum % secondNum; console.log("result5 is = " + result5);

const string = "Hello";
const thirdNum = 10;
const result6 = string / thirdNum; console.log("result6 is = " + result6);

console.log(typeof result6);    //because NaN is americ datatype so datatype is number





//Boolean -true or false
const isCool = true;
console.log(isCool);
console.log(typeof isCool);




//Null - a speecial value which means nothing or empty
let age = null;
console.log(age);
console.log(typeof age);        //it's a bug that shows datatype of null is Object.




//Undefind - a variable that is declared but not defined (assigned a value),then it's value becomes undefined
let x;
console.log(x);



//Objects - used to contain collection of more coplex data(group variables)
const person = {
    name: 'John',
    age: 25,
}
console.log(person);
console.log(person.name);       //Dot Notation - value of key 
console.log(typeof person);         //object
console.log(typeof person.name);    //string

const date = new Date();
console.log(date);




//Statically typed Language -each variable or expression is already known at compile time (C ,Java) Int n =n is integer only 
//Dynamically typed Language - can recieve different datatypes over time (js),at one moment it is something and at another moment it is different

let message="Hello world";
console.log("value of message is = " + message);
console.log(typeof message);

message=5;
console.log("value of message is = " + message);
console.log(typeof message);


