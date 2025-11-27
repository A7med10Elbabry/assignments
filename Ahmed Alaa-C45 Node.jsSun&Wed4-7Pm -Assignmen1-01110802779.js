"use strict"
// part one
//Q1
// let str = "123";
// let num = Number(str)
// console.log(num+7)

//Q2
// const check_falsy = function (random){

//     if (!Boolean(random)== true){
//         return "invalid"
//     }else{
//         return "valid"
//     }
// }

// console.log(check_falsy(""));


//Q3

// for(let i = 1 ; i<=10; i++){
//     if(i%2==0){
//         continue
//     }
//     console.log(i);
    
// }


// Q4

// const nums = [1,2,3,4,5,6,7,8,9,10];
// const even = nums.filter((ele, index, arr)=>{
//         return ele%2==0
// })
// console.log(even)


//Q5

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];

// const final_arr = [...arr1,...arr2]
// console.log(final_arr);


// Q6

// let num = 4;
// switch (num) {
//     case 1:
//         console.log("sunday");
//         break;
//         case 2:
//             console.log("monday");
//             break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//         case 7:
//             console.log("Saturday");
//             break;                    
//             default:
//                 console.log("invalid");
        
//         break;
// }

// Q7
// const str = ["a","ab","abc"];
// const lengths = str.map((ele, index, arr)=>{
//     return ele.length
// })

// console.log(lengths);



// Q8
// function check(num){
//     if(num%3==0 && num%5 == 0){
//         console.log("Divisible by both");
//     }else{
//         console.log("does Divisible");
//     }
// }
// check(15)



// Q9

// const square = (num)=>{
//     return num * num
// }

// console.log(square(5));


//Q10
// const person = {
//     username :"Ahmed",
//     age : 20,
// };
// function struct(obj){
//     const {username, age} = obj
//          return `${username} is ${age} years old`
// }

// console.log(struct(person));



// Q11


// function sum(...nums){
//     let sum = 0;
//     for(let i=0; i<nums.length;i++){
//         sum+=nums[i];
//     }
//     return sum;
// }

// 


// Q12

// function massege(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("succsses");
//         },3000)
//     })}
//     massege().then(
//         (result)=>{
//             console.log(result)
//         }
//     )




//Q13

// function max_num(arr){
//     let max = 0;
//     for(let i = 0 ; i<arr.length;i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(max_num([1,2,3,4,5]))

// Q14
// const person = {
//     username :"Ahmed",
//     age : 20,
// };

// function obj_keys(obj){
//     const keys = Object.keys(obj)
//     return keys
// }

// console.log(obj_keys(person));


// Q15

// function my_split(str){
//     let word = "";
//     const arr = [];
//     for(let i = 0 ;i < str.length; i++){
//         if(str[i]!=" "){
//             word = word + str[i]
//         }else{
//             arr.push(word);
//             word = "";
//         }
//     }
//     arr.push(word)
//     return arr;
// }

// console.log(my_split("my name is ahmed"))

// part2
//  What is the difference between forEach and for...of? When would you use each? 
// for each : you can not break for each because it runs async and you can't you async awit inside it
// ex : if you upload couple of photes in the same time
// for of : you could use it if you have tasks depend on each other 
// ex if you sign up on the system before save the username or email should check if that info already inb the database  


// What are the main differences between == and ===? 
// == will check the value if it the same
// === will check the value and the data type if the same



// Explain how try-catch works and why it is important in async operations.
// between the try block you write your code if the any error you will raise it in the catch block
// and it import in async because when you run reject must run it in the catch block


//What is hoisting and what is the Temporal Dead Zone (TDZ)

// hoisting :moving variable to the top of their scope before code execution
//(TDZ) is the period from the start of a scope until a variable declared with let or const is initialized