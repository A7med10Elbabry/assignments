const express = require("express")
const mysql2 = require("mysql2")

const port = 3000;
const app = express();

const db = mysql2.createConnection({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"ahmed",
    database:"assignment"
});


app.use(express.json())
db.connect((error)=>{
    if (error) {
        console.log("fail to connect to DB!");
    }else{
        console.log("Database connected");
    }
})



// Q2
// const add_query ="ALTER TABLE Products ADD Category varchar(250);";
//     db.execute(add_query,(error, result, fields)=>{
//         if (error) {
//             console.log("internal server error");            
//         }else{
//             console.log("Done");
//         }
//     })



// Q3
// const delete_query ="ALTER TABLE Products DROP COLUMN Category;";
//     db.execute(delete_query,(error, result, fields)=>{
//         if (error) {
//             console.log("internal server error");            
//         }else{
//             console.log("Done");
//         }
//     })



// Q4
// const modify_query ="ALTER TABLE Suppliers MODIFY COLUMN ContactNumber varchar(15); ";
//     db.execute(modify_query,(error, result, fields)=>{
//         if (error) {
//             console.log("internal server error");            
//         }else{
//             console.log("Done");
//         }
//     })



//Q5
// const modify_query ="ALTER TABLE Products MODIFY COLUMN ProductName VARCHAR(250) NOT NULL;";
//     db.execute(modify_query,(error, result, fields)=>{
//         if (error) {
//             console.log("internal server error");            
//         }else{
//             console.log("Done");
//         }
//     })



//Q6
// const insert_qeury = "INSERT INTO `Suppliers` (`SupplierName`, `ContactNumber`) VALUES ('FreshFoods', '01001234567');"
//     db.execute(insert_qeury,(error, result, fields)=>{
//         if (error) {
//             console.log("internal server error");            
//         }else{
//             console.log("Done");
//         }
//     })


// const insert_qeury = "INSERT INTO `Products` (`ProductName`, `Price`, `StockQuantity`, `SupplierID`) VALUES ('milk', '10.00', '30', '5'),('Eggs', '20.00', '40','5'),('Bread', '10.00', '30','5');"
//     db.execute(insert_qeury,(error, result, fields)=>{
//         if (error) {
//             console.log("internal server error");            
//         }else{
//             console.log("Done");
//         }
//     })


// const ProductID_query = "SELECT `ProductID` FROM `Products` WHERE `ProductName`='milk';"
// const ProductID = db.execute(ProductID_query,(error, result, fields)=>{
//     if (error) {
//         console.log("internal server error");            
//     }else{
//             const insert_qeury = "INSERT INTO `Sales` (`ProductID`, `QuantitySold`, `SaleDate`) VALUES (?, '2', '2025-05-20');"
//             db.execute(insert_qeury,[result[0].ProductID],(error, result, fields)=>{
//         if (error) {
//             console.log("internal server error");            
//         }else{
//             console.log("Done");
//         }
//     })
//         }
//     })


// Q7
    // const update_query = "UPDATE `Products` SET Price = 25 WHERE `ProductName`='Bread';"
    // db.execute(update_query,(error, result, fields)=>{
    //     if (error) {
    //         console.log("internal server error");            
    //     }else{
    //         console.log("Done");
    //     }
    // })

// Q8
// const delete_query = "DELETE `Products` WHERE `ProductName`='Eggs';"
// db.execute(delete_query,(error, result, fields)=>{
//         if (error) {
//             console.log("internal server error");            
//         }else{
//             console.log("Done");
//         }
//     })





app.listen(port, ()=>{
    console.log(`server running on  port ${port}....`); 
    
})

