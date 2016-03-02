"use strict";
(function() {
var fs = require("fs");
var data = ""; 
data = fs.readFileSync("./data.txt").toString();

data = data.substr(13);
data = data.substr(0, data.indexOf('}'));

data = data.slice(0, -2);
data = data + "}";
console.log(data);
})();
