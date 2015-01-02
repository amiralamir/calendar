var eventObj;
var first_y;

$(".event").mousedown(function(e) {
    eventObj = $(this);
    first_y = e.pageY - eventObj.offset().top;
});

$(document).mousemove(function(e) {
    if (eventObj != undefined) {
        var weekdayDiv = $("#weekday-1");
        var title = weekdayDiv.find(".weekday-title");

        var lowerBound = title.offset().top + title.height();
        var upperBound = weekdayDiv.offset().top + weekdayDiv.height() - eventObj.height();

        var new_Y = e.pageY - first_y;

        if (new_Y > lowerBound && new_Y < upperBound) {
            eventObj.css("top", new_Y + "px");
            //eventObj.css("left", e.pageX + "px");
        }
    }
}).mouseup(function() {
    eventObj = undefined;
});