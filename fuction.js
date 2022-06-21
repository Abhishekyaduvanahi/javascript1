// It is a block of code that performs a specific task

// It takes data to perform tasks called "function arguments"

// It can take any number of arguments

// It returns only one value at a time 

"use strict";

function get_min( a,b){
    if(a<b){
        return a;
    }
    else {

        return b;
    }
}
let min =get_min(5,8);
document.write(min);