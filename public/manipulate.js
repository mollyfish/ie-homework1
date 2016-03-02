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
console.dir(prevCpus);
console.dir(cpus);
console.log(prettyPercentage);

prevCpus = cpus;
