// Q1
const path = require("node:path");
const fs = require('node:fs');
const os = require("node:os")
const {EventEmitter} = require("node:events")
const event = new EventEmitter()
// function print_path(){
//     console.log({file:__filename, dir: __dirname});
    
// }
// print_path();


// Q2

// function file_name(file_path){
//     console.log(path.parse(file_path).base);
    
// }

// file_name(__filename)


// Q3


// function build_path(obj){
//    console.log(path.format(obj));
    
// }
// build_path({ dir: "/folder", name: "app", ext: ".js"})



// Q4

// function file_ext(file_path){
//     return path.extname(file_path)
// }

// console.log(file_ext(__filename));

// Q5

// function parse(file_path) {
//     const formatted_path = path.parse(file_path) 
//     return {Name:formatted_path.name, Ext:formatted_path.ext}
// }

// console.log(parse(__filename));


// Q6

// function is_absu(file_path){
//     if(path.isAbsolute(file_path)){
//         return true;
//     }
//     return false;
// }

// console.log(is_absu(__filename));


// Q7
// function join(...arg){
//     console.log(path.join(...arg));
// }
// join("src","components", "App.js")


// Q8
// function my_resolve(file_path){
//     return path.resolve(file_path);
// }
// console.log(my_resolve("main.js"));



// Q9

// function join_two(path_one, path_two){

//     console.log(path.join(path_one, path_two));

// }

// join_two("/folder1", "folder2/file.txt")


// Q10

// async function delete_sync(file_path){
//         fs.unlink(file_path,(error)=>{
//             if(error){
//                 console.log("fail");
//             }
//         });
//         console.log("The file.txt is deleted");

// }

// delete_sync("file.txt").catch((error)=>{
//     console.log(error);
    
// })






// Q11
// function make_dir(dir_name) {
//     try {
//         fs.mkdirSync(dir_name)
//         console.log("Success");
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// make_dir("folder")

//Q12
// event.on("start", ()=>{
//     console.log("Welcome event triggered!");
    
// })
// event.emit("start")
//Q13

event.on("login", (username)=>{
    console.log(`User logged in: ${username}`);    
})
event.emit("login", "Ahmed")

//Q14
// try {
//     const content = fs.readFileSync("file.txt",{encoding:"utf-8"})
//     console.log(content);
    
// } catch (error) {
//     console.log(error);
    
// }


//Q15
// fs.writeFile("file.txt", "hello",{flag:"a"},(error)=>{
//     if (error) {
//         console.log("failed");
        
//     }
// })



// Q16

// console.log(fs.existsSync("/home/ahmed/Desktop/node course/week1"));

// Q17

// function os_info() {
// console.log({Platform:os.platform(), Arch:os.arch()});
// }

// os_info()