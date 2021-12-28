var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "20",
        "ok": "2",
        "ko": "18"
    },
    "minResponseTime": {
        "total": "33",
        "ok": "281",
        "ko": "33"
    },
    "maxResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "187"
    },
    "meanResponseTime": {
        "total": "120",
        "ok": "373",
        "ko": "91"
    },
    "standardDeviation": {
        "total": "105",
        "ok": "92",
        "ko": "59"
    },
    "percentiles1": {
        "total": "90",
        "ok": "373",
        "ko": "44"
    },
    "percentiles2": {
        "total": "158",
        "ok": "418",
        "ko": "155"
    },
    "percentiles3": {
        "total": "290",
        "ok": "455",
        "ko": "167"
    },
    "percentiles4": {
        "total": "429",
        "ok": "462",
        "ko": "183"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 10
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
    "count": 18,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.833",
        "ok": "0.083",
        "ko": "0.75"
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
        "ok": "2",
        "ko": "8"
    },
    "minResponseTime": {
        "total": "136",
        "ok": "281",
        "ko": "136"
    },
    "maxResponseTime": {
        "total": "464",
        "ok": "464",
        "ko": "187"
    },
    "meanResponseTime": {
        "total": "200",
        "ok": "373",
        "ko": "157"
    },
    "standardDeviation": {
        "total": "96",
        "ok": "92",
        "ko": "14"
    },
    "percentiles1": {
        "total": "159",
        "ok": "373",
        "ko": "157"
    },
    "percentiles2": {
        "total": "181",
        "ok": "418",
        "ko": "162"
    },
    "percentiles3": {
        "total": "382",
        "ok": "455",
        "ko": "179"
    },
    "percentiles4": {
        "total": "448",
        "ok": "462",
        "ko": "185"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 2,
    "percentage": 20
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
    "count": 8,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.417",
        "ok": "0.083",
        "ko": "0.333"
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
        "total": "33",
        "ok": "-",
        "ko": "33"
    },
    "maxResponseTime": {
        "total": "44",
        "ok": "-",
        "ko": "44"
    },
    "meanResponseTime": {
        "total": "39",
        "ok": "-",
        "ko": "39"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "-",
        "ko": "3"
    },
    "percentiles1": {
        "total": "40",
        "ok": "-",
        "ko": "40"
    },
    "percentiles2": {
        "total": "40",
        "ok": "-",
        "ko": "40"
    },
    "percentiles3": {
        "total": "44",
        "ok": "-",
        "ko": "44"
    },
    "percentiles4": {
        "total": "44",
        "ok": "-",
        "ko": "44"
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
        "total": "0.417",
        "ok": "-",
        "ko": "0.417"
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
