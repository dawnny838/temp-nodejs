const sayHi=require("./5-function");
const names=require("./4-name")

sayHi(names.john)
sayHi(names.mary)
sayHi("Joanna")


// const rl= require("readline");

// // while(rl.stdin!==null){
// process.stdin.on("data",data=> 
//    {
//     data =data.toString().toUpperCase()
//     process.stdout.write(typeof(data))
//     process.stdout.write(data.split("").reverse().join("")+"\n");
// })

// process.stdin.on("data", data => {
//     data = data.toString().toUpperCase()
//     process.stdout.write(data.spit("").reverse().joint("") + "\n")
// })