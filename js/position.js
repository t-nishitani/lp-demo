$(document).ready(function() {
    reposition();
})

var timer = false;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
        reposition();
    }, 100);
});

function reposition() {
    var baseLeft = $('#main-header div').offset().left;
    var baseWidth = $('article').width();
    var targetLeft = baseLeft + 'px';
    if(baseWidth > 970) {
        var targetWidth = (baseWidth - baseLeft) + 'px';
    } else {
        var targetWidth = 970;
    }
    var offerObj = $('.main-offer');
    offerObj.removeClass('main-column');
    offerObj.css('margin-left', 0);
    offerObj.css('left', targetLeft);
    offerObj.css('width', targetWidth);
}