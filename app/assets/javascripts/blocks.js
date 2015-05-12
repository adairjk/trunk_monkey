//= require jquery-ui

$(document).ready(function(){

    $('div').click(function() {
        $(this).effect('bounce', {times:3}, 500);

        var row = $(this).data('row');
        var column = $(this).data('col');

        toggleAbove(row, column);
        toggleBelow(row, column);
        toggleLeft(row, column);
        toggleRight(row, column);
        
        toggleOnOff(this);
    });

    var toggleOnOff = function(element){
        $(element).toggleClass('on');
    };

    var toggleAbove = function(row, column) {
        if (row != 0) {
            toggleOnOff($("div[data-col='" + column + "'][data-row='" + (row - 1) + "']"));
        }
    };

    var toggleBelow = function(row, column) {
        if (row != 4) {
            toggleOnOff($("div[data-col='" + column + "'][data-row='" + (row + 1) + "']"));
        }
    };

    var toggleLeft = function(row, column) {
        if (column != 0) {
            toggleOnOff($("div[data-col='" + (column - 1) + "'][data-row='" + row + "']"));
        }
    };

    var toggleRight = function(row, column) {
        if (column != 4) {
            toggleOnOff($("div[data-col='" + (column + 1) + "'][data-row='" + row + "']"));
        }
    };

    toggleOnOff($("div[data-col='2'][data-row='2']"));
});