var fs = require("fs");
var data = fs.readFileSync("./data.txt").toString();
data = data.slice(0, -2);
console.log(data);
//var parsed = JSON.parse(data);
//console.log(parsed);
