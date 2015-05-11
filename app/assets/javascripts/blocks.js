//= require jquery-ui

$(document).ready(function(){

    $('div').click(function() {
        $(this).effect('bounce', {times:3}, 500);
    });

    $('.red').click(function(){
        $(this).toggleClass('green');
    });

    $('.monkey').click(function(){
        $(this).animate({ opacity: '0' });
        $(this).delay(500).show().animate({ top: 305, opacity: '1' }, {duration: 1000, easing: 'easeOutBounce'});
    });


});