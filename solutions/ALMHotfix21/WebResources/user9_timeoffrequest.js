﻿CalculateTimeOff = function (executionContext) {
    var formContext = executionContext.getFormContext();
    var endDate = formContext.getAttribute("user9_enddate");
    var startDate = formContext.getAttribute("user9_startdate");
    if (!endDate || !startDate || !endDate.getValue() || !startDate.getValue())
        return;

    var dayAsMilliseconds = 86400000;
    var numDaysOff = Math.ceil((endDate.getValue().getTime() - startDate.getValue().getTime())
        / dayAsMilliseconds);
    /* the fix: badFieldReference */
    var requestedDaysOff = formContext.getAttribute("user9_requesteddaysoff");
    requestedDaysOff.setValue(numDaysOff);
}