// const newPen = {
// fullName : "Parker",
// penColor : "black",
// price : 270 , 
// ratings : 4.9,
// isDeal : true,
// discount : true,
// };

// console.log(newPen)
// alert("hellooo!!!!!!!!");
// let nums = prompt("enter your number");
// if(nums%5===0){
//     console.log(nums,"is a multiple of 5")
// }else{
//     console.log(nums, "is not a multiple of 5")
// }
// let marks = prompt("enter your marks");
// if(100>=marks && marks>=80){
//     console.log("your grade is A")
// }else if(79>=marks && marks>=70){
//     console.log("your grade is B")
// }else if(69>=marks && marks>=60){
//     console.log("your grade is C")
// }else if(59>=marks && marks>=50){
//     console.log("your grade is D")
// }else {
//     console.log("you have failed the exam")
// }
// let string = "apna lund";
// for(let i of string){
    
//     console.log("i=" , i)
// }
let student = {
    name: "rahul",
    age : 20,
    cgpa : 9.9,
    isPass : true,

};
for (let key in student){
    console.log("key = ", key , ", value = ", student[key]);
}