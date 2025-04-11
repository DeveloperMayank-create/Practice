let a=5; 
let b=2;
console.log("a="+a +"  " +"b="+b);
{
    console.log("Addition of 5 & 2: "+ (a+b));  //Addition
}
{
    console.log("Subtraction of 5 & 2: "+ (a-b));  //Subtraction
}
{

    console.log("Multiplication of 5 & 2: "+ (a*b));  //Multiplication
}
{
 
    console.log("Division of 5 & 2: "+ (a/b));  //Division
}
{
  
    console.log("Modulus of 5 & 2: "+ (a%b));  //Remainder
}
{
    
    console.log("Power of 5 & 2: "+ (a**b));  //Exponentiation 
}
{
    let a=5;
    console.log("Prefix increment of a: "+ ++a);  //first increase then print
}
{
    let a=5;
    console.log("Postfix increment of a: "+ a++); //first print then increase
}
{
    let a=5;
    console.log("Prefix decrement of a: "+ --a); //first decrease then print
}
{
    let a=5;
    console.log("Postfix decrement of a: "+ a--); //first print then decrease
}
{
    let a=6;
    let b=5;
    let cond1= (a<b);               //false
    let cond2= (a===6);             //true
    console.log("cond1 AND cond2 : "+ (cond1&&cond2));  //Logical AND + "false"
}
{
    let a=6;
    let b=5;
    let cond1= (a<b);               //false
    let cond2= (a===6);             //true
    console.log("cond1 OR cond2 : "+ (cond1||cond2));  //Logical OR + "true"
}
{
    let a=6;
    let b=5;
    let cond1= (a<b);               //false
    let cond2= (a===6);             //true
    console.log("cond1 NOT cond2 : "+ (!cond2));  //Logical NOT + "false"
}
{
    let age=16;
    let result=  age>=18 ? "Can Vote" : "Can not Vote";
    console.log(result);
}
