const fs = require("fs")
const os =require("os")
console.log(os.cpus().length);

//Blocking Code
//it use thread pool and it is not recommended to use
//default thread pool size is 4
// let result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result);



// if we add some more task see the difference between blocking and non-blocking code

console.log("Before");
fs.readFile("./contacts.txt", "utf-8",(err,newResult)=>{
    console.log(newResult);
});
console.log("After");
console.log("Message");
