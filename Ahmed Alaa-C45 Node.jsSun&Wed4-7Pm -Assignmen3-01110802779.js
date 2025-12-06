// const fs = require("node:fs");
// const path = require("node:path");
// const http = require("node:http");
// const {createGzip} = require("node:zlib")
// Q1
// const file_path = path.resolve("./big.txt")
// const readstream = fs.createReadStream(file_path, {encoding:"utf-8"},);

// readstream.on("data", (chunck)=>{
//     console.log("===========================================");
//     console.log(chunck);
//     console.log("===========================================");
// })

// Q2

// const dest_file = path.resolve("./des.txt")
// const source_file = path.resolve("./big.txt")

// const readstream = fs.createReadStream(source_file);
// const writestream = fs.createWriteStream(dest_file);


// readstream.on("data", (chunck)=>{
//     writestream.write(chunck)
// })




// Q3
// const source_file = path.resolve("./big.txt")
// const dest_file_zip = path.resolve("./des.txt.gz")

// const zip = createGzip();


// const readstream = fs.createReadStream(source_file);
// const writezipstream = fs.createWriteStream(dest_file_zip);
// readstream.pipe(zip).pipe(writezipstream)


// part2 Q1
// let port = 3000;
// const httpserver = http.createServer((req, res)=>{
//     const {method, url} = req;
//     if (method === "POST" && url==="/user"){
//         let data = "";
//         let file_data = "";
//         req.on("data", (chunck)=>{
//             data+=chunck;
//             const {username, age, email} = JSON.parse(data);
//             const readstream = fs.createReadStream(path.resolve("./users.json"),{encoding:"utf-8"})
//             readstream.on("data", (chunck)=>{
//                 file_data += chunck;
//             })
//             readstream.close()
//             console.log(file_data);
//             // const checkuser_exist = file_data.some(user=>{
//             //     return user.email === email;
//             // })
//             // if (checkuser_exist) {
//             //     res.writeHead(409,{"content-type":"application/json"})
//             //     res.write({massege:"email is already exist"})
//             // }
//         })
//     }
// })
// httpserver.listen(port, "127.0.0.1", ()=>{
//     console.log(`server is running on port ${port}`);
    
// })


// httpserver.on("close",()=>{
//     console.log("server is off!");
    
// })




// part3
// Q1
// The event loop is a mechanism that allows asynchronous tasks to be handled efficiently without blocking the execution of other operations
// Q2
// libuv is a c++ library and it handles tasks that javascript can't doing like os operation
// Q3
// javaScript runs on one thread
// delicate heavy or blocking tasks run on a thread pool
// i/o like (network, file, timers) is handled through the event loop
// Q5
// thread pool is virtual thread that allaw you to do several tasks in the same time without blocking, depends on your pc
// Q6
// blocking operations run in main js if it takes so long every thing gonna block
// //non block is gonna handle by libuv and event loop using thread pool 
