/**
 * Created by bphaaland on 3/14/15.
 */
//console.log('test test');

//var outerEl = document.getElementById('outer');
//var innerEl = document.getElementById('inner');


function queryId(id) {
    return document.getElementById(id);
}

var query = {
    id: queryId
};

var outerEl = query.id('outer');
var innerEl = query.id('inner');

function alertClicked(event) {
    console.log(event);
    console.log('the red shit is clicked');
}

outerEl.addEventListener('click', alertClicked)

















