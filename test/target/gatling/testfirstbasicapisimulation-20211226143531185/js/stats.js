var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "10",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "239",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "4153",
        "ok": "4153",
        "ko": "70"
    },
    "meanResponseTime": {
        "total": "370",
        "ok": "692",
        "ko": "47"
    },
    "standardDeviation": {
        "total": "878",
        "ok": "1155",
        "ko": "12"
    },
    "percentiles1": {
        "total": "155",
        "ok": "305",
        "ko": "41"
    },
    "percentiles2": {
        "total": "298",
        "ok": "326",
        "ko": "57"
    },
    "percentiles3": {
        "total": "649",
        "ok": "2493",
        "ko": "67"
    },
    "percentiles4": {
        "total": "3452",
        "ok": "3821",
        "ko": "69"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 45
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "count": 10,
    "percentage": 50
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.071",
        "ok": "0.036",
        "ko": "0.036"
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
        "total": "239",
        "ok": "239",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "4153",
        "ok": "4153",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "692",
        "ok": "692",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "1155",
        "ok": "1155",
        "ko": "-"
    },
    "percentiles1": {
        "total": "305",
        "ok": "305",
        "ko": "-"
    },
    "percentiles2": {
        "total": "326",
        "ok": "326",
        "ko": "-"
    },
    "percentiles3": {
        "total": "2493",
        "ok": "2493",
        "ko": "-"
    },
    "percentiles4": {
        "total": "3821",
        "ok": "3821",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 9,
    "percentage": 90
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.036",
        "ok": "0.036",
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
        "ok": "0",
        "ko": "10"
    },
    "minResponseTime": {
        "total": "36",
        "ok": "-",
        "ko": "36"
    },
    "maxResponseTime": {
        "total": "70",
        "ok": "-",
        "ko": "70"
    },
    "meanResponseTime": {
        "total": "47",
        "ok": "-",
        "ko": "47"
    },
    "standardDeviation": {
        "total": "12",
        "ok": "-",
        "ko": "12"
    },
    "percentiles1": {
        "total": "41",
        "ok": "-",
        "ko": "41"
    },
    "percentiles2": {
        "total": "57",
        "ok": "-",
        "ko": "57"
    },
    "percentiles3": {
        "total": "67",
        "ok": "-",
        "ko": "67"
    },
    "percentiles4": {
        "total": "69",
        "ok": "-",
        "ko": "69"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
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
    "count": 10,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.036",
        "ok": "-",
        "ko": "0.036"
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
