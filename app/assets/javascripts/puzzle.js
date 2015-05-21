$(document).ready(function(){
    $(".ui-draggable").draggable({
        //grid: [ 10, 10 ]
    });

    $( ".droppable" ).droppable({
        accept: ".ui-draggable",
        drop: function(event, ui) {
            var top = ($(this).position().top);
            var left = ($(this).position().left);
            var draggable = ui.draggable;
            draggable.position({
                my: "top left",
                at: "top left",
                of: $(this)
            })
        },
        over: function( event, ui ) {
            $(this).addClass('hover')
        },
        out: function( event, ui ) {
            $(this).removeClass('hover')
        }
    });
});