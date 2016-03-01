"use strict";

(function () {
  for (var prop in pieData) {
    if(pieData.hasOwnProperty(prop)) {
      console.log(prop + " = " + pieData[prop].size + ' ' + pieData[prop].units);
    } 
  }
  window.onload = function(){
    var ctx = document.getElementById("chart-area").getContext("2d");
    window.myPie = new Chart(ctx).Pie(pieData);	
  };
})();
