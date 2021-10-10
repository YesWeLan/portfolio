$(document).ready(function () {
    window.scrollTo(0,0);
    setTimeout(function(){
        app.activeVue = 'content';
        $('html').removeAttr('class');
        $('body').removeAttr('class');
        $('body').css('position', 'relative');
    }, 1000);
});