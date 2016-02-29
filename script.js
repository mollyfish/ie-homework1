var fs = require("fs");
var data = fs.readFileSync("./data.txt").toString();
console.log(data);
//var parsed = JSON.parse(data);
//console.log(parsed);
