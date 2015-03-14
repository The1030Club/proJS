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
}

function stopBubbling(event) {
    event.stopPropagation();
    alertClicked(event)
}

outerEl.addEventListener('click', alertClicked);
innerEl.addEventListener('click', stopBubbling);

















