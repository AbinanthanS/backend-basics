const fs = require("fs");
const os = require("os");


fs.writeFile("test.txt", "write success", (err) => {
    if (err) throw err;
    console.log("file written successfully");

    fs.readFile("test.txt", { encoding: "utf8" }, (err, data) => {
        console.log("read file Async", data);
    });
});

console.log("file writing in process");

//OS Module

console.log(os.platform());
console.log(os.arch());

const cpu = os.cpus();
const n = cpu.length;
console.log("no. of CPU : ",n);

for (let i = 0;i<n;i++) console.log("speed of cpu ",i+1," ",cpu[i].speed);


console.log(os.uptime());
console.log(os.totalmem()/1024**3,"GB");
console.log(os.freemem()/1024**3,"GB");
console.log(os.homedir());
