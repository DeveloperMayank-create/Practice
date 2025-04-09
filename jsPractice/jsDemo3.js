// Demo 3 :- Operators and Eqaulity

//Comparision Operators returns always ==> true/false
const a = 5;
const b = 10;
console.log(a > b);
console.log("a & b are equal = " + (a == b));
console.log("a & b are not equal = " + (a != b));
console.log("a & b are strictly equal = " + (a === b));
console.log("a & b are not strictly equal = " + (a !== b));
console.log(5 == "5");      //Loosly Eqaul - compares only variables , the Evil Ones - ==  !=
console.log(5 === "5");     //Strictly Equal- compares variables with datatype , the Good Ones - === !==




// Logical Operators (AND OR NOT)
// AND(&&) - all should be true
// OR(||) - one should be true is mendatory
console.log("result is " +(true && true) );         //true
console.log("result is " +(true && false) );        //false
console.log("result is " +(true || true) );         //true
console.log("result is " +(true || false) );        //true

console.log("result is " +(! true) );               //false