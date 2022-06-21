// it is used for javascript objects

"use strict";
const obj ={George:2001,Barack:2009,DonaldL2017};
for (let name in obj){
    document.write(name + "got elected in " +obj[name]);
}