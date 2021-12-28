var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "20",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "301",
        "ok": "301",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "177",
        "ok": "177",
        "ko": "-"
    },
    "percentiles1": {
        "total": "258",
        "ok": "258",
        "ko": "-"
    },
    "percentiles2": {
        "total": "356",
        "ok": "356",
        "ko": "-"
    },
    "percentiles3": {
        "total": "570",
        "ok": "570",
        "ko": "-"
    },
    "percentiles4": {
        "total": "779",
        "ok": "779",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 19,
    "percentage": 95
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.198",
        "ok": "0.198",
        "ko": "-"
    }
},
contents: {
"req_first-8b04d": {
        type: "REQUEST",
        name: "first",
path: "first",
pathFormatted: "req_first-8b04d",
stats: {
    "name": "first",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "243",
        "ok": "243",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "507",
        "ok": "507",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "314",
        "ok": "314",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles1": {
        "total": "275",
        "ok": "275",
        "ko": "-"
    },
    "percentiles2": {
        "total": "314",
        "ok": "314",
        "ko": "-"
    },
    "percentiles3": {
        "total": "487",
        "ok": "487",
        "ko": "-"
    },
    "percentiles4": {
        "total": "503",
        "ok": "503",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 10,
    "percentage": 100
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.099",
        "ok": "0.099",
        "ko": "-"
    }
}
    },"req_second-a9f0e": {
        type: "REQUEST",
        name: "second",
path: "second",
pathFormatted: "req_second-a9f0e",
stats: {
    "name": "second",
    "numberOfRequests": {
        "total": "10",
        "ok": "10",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "135",
        "ok": "135",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "831",
        "ok": "831",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "288",
        "ok": "288",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "234",
        "ok": "234",
        "ko": "-"
    },
    "percentiles1": {
        "total": "143",
        "ok": "143",
        "ko": "-"
    },
    "percentiles2": {
        "total": "400",
        "ok": "400",
        "ko": "-"
    },
    "percentiles3": {
        "total": "707",
        "ok": "707",
        "ko": "-"
    },
    "percentiles4": {
        "total": "806",
        "ok": "806",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.099",
        "ok": "0.099",
        "ko": "-"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
