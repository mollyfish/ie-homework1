$(function(){

var percentages = [0.2669, 0.4763, 0.7827, 0.265, 0.236, 0.7745, 0.3326];
//percentages.push(prettyPercentage);

console.log(percentages);
var data = {
    labels: ["-60", "-50", "-40", "-30", "-20", "-10", "0"],
    datasets: [
        {
            label: "CPU Usage",
            fillColor: "rgba(107,13,255,0.2)",
            strokeColor: "rgba(107,13,255,1)",
            pointColor: "rgba(107,13,255,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(107,13,255,1)",
            data: [percentages[6],percentages[5],percentages[4],percentages[3],percentages[2],percentages[1],percentages[0]]
        }
    ]
}
;
var options = {
    scaleOverride: true,
    scaleSteps: 10,
    scaleStepWidth: 0.1,
    scaleStartValue: 0,
};

var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(data, options);

setInterval(function(){

  $.get('/cpuinfo.html', function(data){
    console.log(data);
  });

  myNewChart.addData([0.3422], "0");  
  myNewChart.removeData();

}, 2000);

});
