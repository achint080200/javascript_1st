//we will talk about static and heap memory allocation in JS
//1st is static:

//when it comes to a prmitive datatype , it is stored in static memory 
//so whenever you assign a variable it always gives a copy of a data and wont make any changes to an actua data:
let firstNum = 35
let secondNum = firstNum
secondNum=36
console.log(secondNum)
console.log(firstNum)
//2nd is heap :
//all the non premitive datatype i stored in a heap memory 
let firstObj={
    emailId:"achintparmar@gmail.com"

}
let secondObj = firstObj
secondObj.emailId="hahah@gmsil.com"
console.log(firstObj)
console.log(secondObj)
