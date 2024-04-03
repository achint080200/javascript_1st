// //for of
// // const arr= [1,2,3,4,5,6]
// // for (const iterator of arr) {
// //     console.log(iterator);
// // }

// const str = "hello world!"
// for (const iterator of str) {
    
//     if(iterator == " ") {
//         continue
        
//     }
//    // console.log(`each charachter is ${iterator}`);
// }
// // //const map=new Map()
// // map.set("In","india")
// // map.set("Cn","china")
// // // console.log(map);
// // for (const [In,Cn] of map) {
// //     //console.log([In,Cn]);
// // }
// const avai = {
//     MI:"mumbai",
//     CSK:"chennai"
// }
// for (const key in avai) {
//    //console.log(avai[key]);
   
// }
// const programme = [10,20,399,29]
// for (const key in programme) {
//   // console.log(programme[key]);
// }
// const map =new Map()
// map.set("In","india")
// map.set("Cn","china")
// for (const key in map) {
//     //console.log(key);
// // }
// // const arrays = ["hii","kaise","ho"]
// // arrays.forEach((val)=>console.log(val));
const l1=[{pg_name:"javascript",price:10000},{pg_name:"java",price:2000}]
l1.forEach((item)=>{
    console.log(item.pg_name);
})