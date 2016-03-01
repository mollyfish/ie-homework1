"use strict";
(function() {
var fs = require("fs");
var data = ""; 
data = fs.readFileSync("./data.txt").toString();
data = data.substr(1);
data = data.slice(0, -2);
data = "var pieData = [" + data + "];";
console.log(data);
})();
