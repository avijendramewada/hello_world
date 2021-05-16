const chalk =require("chalk")
const res = require("validator")
console.log(chalk.blue("hello user"));
 const result = res.isEmail("vmewadegmail.com");
console.log(result ? chalk.green("success"):chalk.red("failed"));