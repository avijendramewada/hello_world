const os = require("os");
console.log(os.arch());
const freemem =os.totalmem();
console.log(`${freemem/1024/1024/1024}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());