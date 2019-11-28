var requestURL = 'https://tesismaletas.herokuapp.com/api/sensores';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

var map;

request.onload = function(){
    var coordinateList= [];
    var dataObject = request.response;
    for(obj of dataObject){
        obj = JSON.parse(obj);
        if(obj.sensor === "GPS")
            coordinateList.push(obj.value)
    }
    console.log(coordinateList);
}


function paint(coords){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
    });
}