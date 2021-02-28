$(document).ready(function () {
    $('.tab-item').click(function () {
        var activeClass = $(this).attr('data-class-active');
        var accessClass = $(this).attr('data-class-access');

        var activeContent = $(this).attr('data-active-content');
        var contentActiveClass = $(this).attr('data-content-class-active');
        var activeContentWrapper = $(this).attr('data-active-content-wrapper');

        $('.' + accessClass).removeClass(activeClass);
        $(this).addClass(activeClass);

        $('.' + activeContentWrapper).removeClass(contentActiveClass);
        $('.' + activeContent).addClass(contentActiveClass);
    });
});