//Uniary Operators (Increments and Decrements)


//Pre and Post Increments
let a=5;
console.log("value of a after pre increment = "+ (++a));        //first increase then print


let b = 5;
console.log("FOR POST INCREMENT");
console.log("in first step , value will print as it is = " + (b++));        //Print then increase
console.log("in second step , value will increased , so updated value is = " + (b++));


let c=10;
console.log("value of C after pre decrement = "+(--c));         //first decrease then print

let d = 10;
console.log("FOR POST DECREMENT");
console.log("in first step , value will print as it is = " + (d--));        //Print then Decrease
console.log("in second step , value will decreased , so updated value is = " + (d--));





// COMPARISION OPERATORS
// Strictly eqaual = where values and datatype both matters and checked during operation
// Loosly equals = where only values are compared between two variables , may be wrong

let x=5;    //Number
let y="5";  //String
console.log("Are they Loosly Equals ---- "+(x==y));
console.log("But actually ---- "+(x===y));





//TERNARY OPERATION
let age = 18;
let status = (age > 18) ? 'i can vote' : 'i cannot vote';
console.log(status);





//LOGICAL OPERATOR
//  AND (&&): gives true when everyone is true
//  OR (||): give true when atleast one condition is true
//  NOT (!): give reversed output

console.log(("For AND operator :")+ (true && true && true));
console.log(("For OR operator :")+ (true || false));
console.log(("For NOT operator :")+(!true));