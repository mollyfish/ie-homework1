var prevCpus = {
        "softirq" : "2607",
        "guest_nice" : "0",
        "user" : "10411",
        "guest" : "0",
        "steal" : "0",
        "system" : "71126",
        "nice" : "22076",
        "irq" : "3",
        "iowait" : "121714",
        "idle" : "21820846",
};
var cpus = {};
// var percentages = [0, 0, 0, 0, 0, 0, 0];
// var data = {
//   labels: ["-60", "-50", "-40", "-30", "-20", "-10", "0"],
//   datasets: [{
//       label: "CPU Usage",
//       fillColor: "rgba(107,13,255,0.2)",
//       strokeColor: "rgba(107,13,255,1)",
//       pointColor: "rgba(107,13,255,1)",
//       pointStrokeColor: "#fff",
//       pointHighlightFill: "#fff",
//       pointHighlightStroke: "rgba(107,13,255,1)",
//       data: [percentages[0],percentages[1],percentages[2],percentages[3],percentages[4],percentages[5],percentages[6]]
//     }]
// };
// var options = {
//     scaleOverride: true,
//     scaleSteps: 10,
//     scaleStepWidth: 10,
//     scaleStartValue: 0,
// };


// var ctx = document.getElementById("myChart").getContext("2d");
// var myNewChart = new Chart(ctx).Line(data, options);


setInterval(function() {
  $.get('/cpuinfo', function(newData) {
    console.log(JSON.parse(newData));

    cpus = JSON.parse(newData);
    // console.dir(prevCpus);
    
    var prevSoftirq = parseInt(prevCpus.softirq);
    var prevGuest_nice = parseInt(prevCpus.guest_nice);
    var prevUser = parseInt(prevCpus.user);
    var prevGuest = parseInt(prevCpus.guest);
    var prevSteal = parseInt(prevCpus.steal);
    var prevSystem = parseInt(prevCpus.system);
    var prevNice = parseInt(prevCpus.nice);
    var prevIrq = parseInt(prevCpus.irq);
    var prevIowait = parseInt(prevCpus.iowait);
    var prevIdle = parseInt(prevCpus.idle);

    var softirq = parseInt(cpus.softirq);
    var guest_nice = parseInt(cpus.guest_nice);
    var user = parseInt(cpus.user);
    var guest = parseInt(cpus.guest);
    var steal = parseInt(cpus.steal);
    var system = parseInt(cpus.system);
    var nice = parseInt(cpus.nice);
    var irq = parseInt(cpus.irq);
    var iowait = parseInt(cpus.iowait);
    var idle = parseInt(cpus.idle);

    var trueIdle = idle + iowait;
    var prevTrueIdle = prevIdle + prevIowait;

    var nonIdle = user + nice + system + irq + softirq + steal;
    var prevNonIdle = prevUser + prevNice + prevSystem + prevIrq + prevSoftirq + prevSteal

    var total = trueIdle + nonIdle;
    var prevTotal = prevTrueIdle + prevNonIdle;

    var totalDiff = total - prevTotal;
    var idleDiff = trueIdle - prevTrueIdle;

    var rawPercentage = (totalDiff - idleDiff) / totalDiff;
    var prettyPercentage = (rawPercentage*100);

    // console.log(prettyPercentage);

    percentages.push(prettyPercentage);
    percentages.shift();

    // myNewChart.addData([percentages[6]], "0");
    // data.datasets[0].data = [percentages[0],percentages[1],percentages[2],percentages[3],percentages[4],percentages[5],percentages[6]]; 
    // myNewChart.removeData();
    // myNewChart.scale.xLabels = ["-60", "-50", "-40", "-30", "-20", "-10", "0"];
    // myNewChart.update();
    prevCpus = cpus;
  });
}, 4000);
