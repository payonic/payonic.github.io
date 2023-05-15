$( document ).ready(function() {
    var req = {
        jsinitsuccess: initDynamicSuccess,
        jspaymentsuccess: paymentSuccess,
        jspaymentstarted: paymentStarted,
        jspaymentfailed: paymentFailed,
    }

    initDynamic(req)
});