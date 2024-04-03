// const myNums=[1,2,3,4,5,6,7,8,9]
// let numb=myNums.filter((item)=>{item>4})
// console.log(numb);


// const lala=[1,2,3,4,4,5,6]
// lala.forEach(element => {
//     console.log(element+10)
// });
// const lala=[1,2,3,4,4,5,6,10,20]

// let newArray=lala.filter((i) => {
//    return i + 10
// });
// console.log(newArray);
let llm = [1,2,3,4,5]
let newllm = llm.reduce((acc,currval)=>{
   //console.log(`accumulater is ${acc} and current value is ${currval}`);
   return acc + currval},0)
//console.log(newllm);
let myArray = [{
   courseName :"javascrpit",
   price : 5000
},{
   courseName:"DSA",
   price:10000
},{
   courseName:"html_css",
   price:3000
}]
let totalprice= myArray.reduce((acc,item)=>{
   console.log(`${acc} ${item}`);
   return acc + item.price},0)
console.log(totalprice);














