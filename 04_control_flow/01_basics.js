// // if (2 === "2") {
// //     console.log("hello");
// // }
// if (false) {
//     console.log("true");
    
// } else {
//     console.log("false");
    
// }
// let number = 200
// if (number <300) {
//     var power = "code"
//     console.log(`user can : ${power}`);
    

// }
// console.log(`user can : ${power}`);
// let numb=290
// if(numb<100){
//     console.log("number is less then 100");

// }else if(numb<200){
//     console.log("number is less than 200");

// }else{
//     console.log("number is less than 300");
// }
let userLoggedIn = true
let availableBalance = true
let loogedInWithGoogle = false
let loggedInWithEmail = true
if(userLoggedIn && availableBalance){
    console.log("you are eligible to buy something");
}

if(loggedInWithEmail || loogedInWithGoogle){
    console.log("you are eligible to buy something");

}