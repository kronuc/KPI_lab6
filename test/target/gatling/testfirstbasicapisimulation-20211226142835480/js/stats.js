var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "6",
        "ok": "1",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "331",
        "ok": "451",
        "ko": "331"
    },
    "maxResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "352"
    },
    "meanResponseTime": {
        "total": "359",
        "ok": "451",
        "ko": "341"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "0",
        "ko": "8"
    },
    "percentiles1": {
        "total": "343",
        "ok": "451",
        "ko": "337"
    },
    "percentiles2": {
        "total": "351",
        "ok": "451",
        "ko": "349"
    },
    "percentiles3": {
        "total": "426",
        "ok": "451",
        "ko": "351"
    },
    "percentiles4": {
        "total": "446",
        "ok": "451",
        "ko": "352"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 17
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
    "count": 5,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.167",
        "ko": "0.833"
    }
},
contents: {
"req_get-all-posts---04b32": {
        type: "REQUEST",
        name: "Get all Posts - 1st Call",
path: "Get all Posts - 1st Call",
pathFormatted: "req_get-all-posts---04b32",
stats: {
    "name": "Get all Posts - 1st Call",
    "numberOfRequests": {
        "total": "6",
        "ok": "1",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "331",
        "ok": "451",
        "ko": "331"
    },
    "maxResponseTime": {
        "total": "451",
        "ok": "451",
        "ko": "352"
    },
    "meanResponseTime": {
        "total": "359",
        "ok": "451",
        "ko": "341"
    },
    "standardDeviation": {
        "total": "42",
        "ok": "0",
        "ko": "8"
    },
    "percentiles1": {
        "total": "343",
        "ok": "451",
        "ko": "337"
    },
    "percentiles2": {
        "total": "351",
        "ok": "451",
        "ko": "349"
    },
    "percentiles3": {
        "total": "426",
        "ok": "451",
        "ko": "351"
    },
    "percentiles4": {
        "total": "446",
        "ok": "451",
        "ko": "352"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 17
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
    "count": 5,
    "percentage": 83
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.167",
        "ko": "0.833"
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
