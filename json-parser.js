"use strict";
(function() {
var fs = require("fs");
var data = ""; 
data = fs.readFileSync("./data.txt").toString();
data = data.substr(13);

data = data.substr(0, data.indexOf('}'));

data = "var cpus = " + data + "};";
console.log(data);
})();
