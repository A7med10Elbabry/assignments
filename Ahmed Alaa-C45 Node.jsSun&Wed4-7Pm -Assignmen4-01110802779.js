// const express = require("express");
// const fs = require("node:fs");
// const path = require("node:path");
// const {randomUUID} = require("node:crypto")
// const app = express();
// const port = 3000;


// app.use(express.json())

// app.post("/user", (req, res, next)=>{
// const {username, email, age} = req.body;
// const readstream = fs.createReadStream(path.resolve("./index.json"))
// let data = "";
// let users = []
// readstream.on("data", (chunck)=>{
//     data+=chunck;
// })
// readstream.on("end", ()=>{
//     users = JSON.parse(data);
//     const check_email = users.find(user=>{
//         return user.email === email
//     })
//     if (check_email) {
//         return res.json({massege:"Email is already exist"})
//     }
//     users.push({id:randomUUID(), username:username, email:email, age:age})
//     const writestream = fs.createWriteStream(path.resolve("./index.json"))
//     writestream.write(JSON.stringify(users))
//     writestream.end(()=>{
//         res.json({massege:"done"})
//     })
// })

// })

// app.get("/user", (req, res, next)=>{
//     const readstream = fs.createReadStream(path.resolve("./index.json"))
// let data = "";
// let users = []
// readstream.on("data", (chunck)=>{
//     data+=chunck;
// })
// readstream.on("end",()=>{
//     users = JSON.parse(data)
//     res.json(users)
// })
// })

// app.patch("/user/:id", (req, res, next)=>{
//     const {id} = req.params;
//     const {email} = req.body;
// const readstream = fs.createReadStream(path.resolve("./index.json"))
// let data = "";
// let users = []
// readstream.on("data", (chunck)=>{
//     data+=chunck;
// })
// readstream.on("end", ()=>{
//     users = JSON.parse(data)
//     const check_user = users.find(user=>{
//         if (user.id === id) {
//             user.email = email;
//         }
//         return user
//     })
//     if (!check_user) {
//         res.json({massege:"user not found"})
//     }else{
//         const writestream = fs.createWriteStream(path.resolve("./index.json"))
//         writestream.write(JSON.stringify(users))
//         writestream.end(()=>{
//         res.json({massege:"done"})
//     })
//     }
// })
// })


// app.get("/user/getByName",(req, res, next)=>{
//     const {name} = req.query
//     const readstream = fs.createReadStream(path.resolve("./index.json"))
//     let data = "";
//     let users = []
//     let found;
//     readstream.on("data", (chunck)=>{
//     data+=chunck;
// })
// readstream.on("end",()=>{
//     users = JSON.parse(data)
//     const check_user = users.find(user=>{
//         if (user.username === name) {
//             found = user;
//             return user;
//         }
// })
// if (!check_user) {
//     res.status(409).json({massege:"user not found"})
// }else{
//     res.status(200).json(found)
// }
// })
// })




// app.get("/user/getById",(req, res, next)=>{
//     const {id} = req.query
//     const readstream = fs.createReadStream(path.resolve("./index.json"))
//     let data = "";
//     let users = []
//     let found;
//     readstream.on("data", (chunck)=>{
//     data+=chunck;
// })
// readstream.on("end",()=>{
//     users = JSON.parse(data)
//     const check_user = users.find(user=>{
//         if (user.id == id) {
//             found = user;
//             return user;
//         }
// })
// if (!check_user) {
//     res.status(409).json({massege:"user not found"})
// }else{
//     res.status(200).json(found)
// }
// })
// })



// app.listen(port, ()=>{
//     console.log(`server running on  port ${port}....`); 
// })



