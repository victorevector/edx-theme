function hideCourseTabs($el) {
    var c = $el.children().slice(2, 6);
    c.hide();
}

$(document).ready(function() {
    hideCourseTabs($('.course-tabs'));
});