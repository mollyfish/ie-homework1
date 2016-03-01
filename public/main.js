var percentages = [];
percentages.push(prettyPercentage);

console.log(percentages);
var data = {
    labels: ["-60", "-50", "-40", "-30", "-20", "-10", "0"],
    datasets: [
        {
            label: "CPU Usage",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [percentages[6],percentages[5],percentages[4],percentages[3],percentages[2],percentages[1],percentages[0]]
        }
    ]
}
;
var options = {
    scaleOverride: true,
    scaleSteps: 10,
    scaleStepWidth: 10,
    scaleStartValue: 0,
};

var ctx = document.getElementById("myChart").getContext("2d");
var myNewChart = new Chart(ctx).Line(data, options);

past1 = prettyPercentage;
past2 = past1;
past3 = past2;
past4 = past3;
past5 = past4;
past6 = past5;
