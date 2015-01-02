function Event(title, start_time, end_time, weekday) {

    this.title = title;
    this.start_time = start_time;
    this.end_time = end_time;
    this.weekday = weekday;
    var obj = this;

    this.element = $("<div></div>").addClass("event").html(title)
        .mousedown(function(e) {
            eventElement = $(this);
            eventElement.eventObj = obj;
            eventElement.first_y = e.pageY - eventElement.offset().top;
        })
        .appendTo($("#weekday-" + weekday));
}

var eventElement;

$(document).mousemove(function(e) {
    if (eventElement != undefined) {
        var weekdayDiv = $("#weekday-" + eventElement.eventObj.weekday);
        var title = weekdayDiv.find(".weekday-title");

        var lowerBound = title.offset().top + title.height();
        var upperBound = weekdayDiv.offset().top + weekdayDiv.height() - eventElement.height();

        var new_Y = e.pageY - eventElement.first_y;

        if (new_Y > lowerBound && new_Y < upperBound) {
            eventElement.css("top", new_Y + "px");
            //eventElement.css("left", e.pageX + "px");
        }
    }
}).mouseup(function() {
    eventElement = undefined;
});