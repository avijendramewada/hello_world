const http = require("http");

const fs =require("fs")
const server = http.createServer((req,res) =>{
   
    // fs.readFile(`${__dirname}/user.json`,"utf-8",(err,data)=>{
       
    //     const userdata = JSON.parse(data)
    //     res.end(userdata[0].email)
    //     //  res.end(data);
    // })
    const data =fs.readFileSync(`${__dirname}/user.json`,"utf-8");
    const objdata = JSON.parse(data);
    if(req.url=="/userapi"){
        res.writeHead(200,{"content-type" :"app/json"});
        res.end(objdata[0].email)
    }
   

})
 server.listen(8000, () =>{
     console.log("server listning the port 8000");
 })
// const fs = require("fs");
// const obj ={
//     name : "vijendra",
//     age:26,
//     email:"avijendra@gmail.com"

// }
// const data =JSON.stringify(obj)
// console.log(data);
// const data1 = JSON.parse(data);
// console.log(data1);
// fs.writeFile("user.json",data ,(err)=>{
//     console.log("file cereated");
// })
