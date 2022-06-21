"use strict"
let a =2;
let b =3;
let operator ="+";

switch(operator){

case "+" :
    document.write(a+b);
    break;
case "-" :
    document.write(a-b);
    break;
case "*":
    document.write(a*b);
    break;
default: 
    document.write("This operation is not yet supported ");            


}