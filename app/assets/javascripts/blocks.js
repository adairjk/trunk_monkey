//= require jquery-ui

var score = 0;
var addScore = function() {
    score = score + 1;
    $('#score').text(score);
};

var subtractScore = function() {
    score = score - 1;
    $('#score').text(score);
};

var randomNumber = function() {
    return Math.floor(Math.random() * 5);
};

var randomPair = function() {
    var rand1 = randomNumber();
    var rand2 = randomNumber();
    return [rand1,rand2];
};
var buildArray = function() {
    var array = [];
    for(var i = 0; i < 5; i++) {
        array.push(randomPair());
    }
    return array;
};

$(document).ready(function(){

    //var score = 0;

    $('.block').click(function() {

        var row = $(this).data('row');
        var column = $(this).data('col');

        toggleAbove(row, column);
        toggleBelow(row, column);
        toggleLeft(row, column);
        toggleRight(row, column);

        toggle(this);
        addScore();
        isGameOver();
    });

    var toggle = function(element){
        $(element).toggleClass('on');
    };

    var toggleAbove = function(row, column) {
        if (row != 0) {
            toggle($("div[data-col='" + column + "'][data-row='" + (row - 1) + "']"));
        }
    };

    var toggleBelow = function(row, column) {
        if (row != 4) {
            toggle($("div[data-col='" + column + "'][data-row='" + (row + 1) + "']"));
        }
    };

    var toggleLeft = function(row, column) {
        if (column != 0) {
            toggle($("div[data-col='" + (column - 1) + "'][data-row='" + row + "']"));
        }
    };

    var toggleRight = function(row, column) {
        if (column != 4) {
            toggle($("div[data-col='" + (column + 1) + "'][data-row='" + row + "']"));
        }
    };

    var toggleRight = function(row, column) {
        if (column != 4) {
            toggle($("div[data-col='" + (column + 1) + "'][data-row='" + row + "']"));
        }
    };

    var clearBoard = function() {
        $('.block').removeClass('on');
    };

    var setupGame = function(array) {
        clearBoard();
        for (var i in array) {
            $("div[data-col='" + array[i][0] + "'][data-row='" + array[i][1] + "']").click();
            subtractScore();
            randomNumber();
        }
    };

    var isGameOver = function() {

        if ($('.on').size() === 0) {
            $('.block').hide("explode", {pieces: 9 }, 1000);
        }
    };

    $('#reset').click(function() {
        $('.block').show();
        score = 0;
        setupGame(buildArray());
    });

    setupGame(buildArray());
});