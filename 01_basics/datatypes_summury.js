 /*There are two types of datatypes in javascript
 the way it store data in memory block and the way they access that memory ,depend on them there are two types.

 1. Primitive 
it means it works on call by value.
 Number, string, Boolean, null ,undefined , bigInt , symbol
 */

 let hello= 34
 let x="achint"
 let y=null
 let z

 console.log(typeof hello)
 console.log(typeof y)
 console.log(typeof x)
 console.log(typeof z)
 // null always return object type

 /*
 2.Non primitive(reference datatype)
array,object,Functions

it mainly works on call by reference


 */

let x1=["kaise","ho","aaplog"]
let x2={
    1:"jii",
    2:"hii"
}
let x3=function(){
    console.log("hiii")
}

console.log(typeof x1)
console.log(typeof x2)
console.log(typeof x3)


   