const fs = require("fs");

//Synchronous way of writing a file___Blocking code
fs.writeFileSync("./file.txt" ,"This is a file created by Node.js");

//async way of writing a file____Non-blocking code
fs.writeFile("./file.txt", "This is a file created by Node.js", (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File created successfully");
    }
});
//synchrounous way of reading a file
// const result = fs.readFileSync("./contacts.txt", "utf-8")
// console.log(result);

// Ashysnc way of reading a file
// fs.readFile("./contacts.txt","utf-8",(err,result)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(result);
//     }
// });

// fs.appendFileSync("./test.txt",new Date().toString()+"\n");

// fs.cpSync("./test.txt", "./test2.txt");
// fs.stat("./test.txt", (err, stats) => {});
// fs.unlinkSync("./test.txt");
//fs.mkDirsSync("./myDoc");
//fs.mkDirsSync("./myDocs/myFiles/myImages");



// There are any more method to manage files in Node.js. You can find them in the official documentation of Node.js.    https://nodejs.org/api/fs.html