// let target={1:"hii",2:"byy"}
// let source={3:"kaisa",4:"pss"}
// //let obj2=Object.assign({},target,source)
// let obj2={...target,...source}
// console.log(obj2);
let obj1 = {
    name : "achint",
    cityname:"vadodara",
    emailId:"achint@gmail.com",
    "full name": "parmar"

}
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
//console.log(obj1.name);

const {emailId:id} = obj1
console.log(id);