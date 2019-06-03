var lineup;
var table;
var player_index;
$(document).ready(function() {
    $.getJSON("https://s3.amazonaws.com/braves.lineup/data.json", function(json) {
        lineup = json;
        fillTable();
    });
});

function fillTable() {
    table = document.getElementById('lineup').rows
    for(var i = 0; i < table.length - 1; i++) {
        fillBatter(i + 1)
    }
}

function fillBatter(order) {
    base = '#batter-' + String(order);
    $(base + ' .numbers').html(lineup[order - 1]['order']);
    $(base + ' .names a').html(lineup[order - 1]['name']);
    $(base + ' .positions').html(lineup[order - 1]['position']);
    name = lineup[order - 1]['name'];
    for(var i = 9; i < lineup.length; i++) {
        if (name == lineup[i]['name']) {
            player_index = i;
            break;
        }
    }
    $(base + ' .averages').html(lineup[player_index]['BA']);
    $(base + ' .homeruns').html(lineup[player_index]['HR']);
    $(base + ' .rbis').html(lineup[player_index]['RBI']);
    $(base + ' .obps').html(lineup[player_index]['OBP']);
    $(base + ' .slugs').html(lineup[player_index]['SLG']);
    $(base + ' .opss').html(lineup[player_index]['OPS']);
    $(base + ' .pictures img').attr('src', lineup[player_index]['picture']);
    $(base + ' .names a[href]').attr('href', lineup[player_index]['URL']);
}