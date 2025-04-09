//FUNCTION

console.log("Print");       ///Predefined function





//Function Declaration
//function parameter = value 
function square(number){
    return number*number;
    //have access to "this" keyword
}
// a function expression
const name1 = function (params){
    return params*params;
}
// an arrow function
const name2 =(params) => {
    return params;
}





//Function Call (invoking/executing a function)
//Function Arguments = values that will work as parameter
const result = square(3);
console.log("result is = " + result);