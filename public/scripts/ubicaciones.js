var requestURL = 'https://tesismaletas.herokuapp.com/api/sensores';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

var map;
function initMap() {
    console.log("Mapa cargado")
  }


request.onload = function () {
    var coordinateList = [];
    var dataObject = request.response;
    for (obj of dataObject) {
        if (obj.sensor === "GPS")
            coordinateList.push(obj.value)
    }
    console.log(coordinateList);
    paint(coordinateList)
}


function paint(coords) {
    //sacar ultimas coordenadas las cuales seran el centro del mapa
    const latVal = parseFloat(coords[coords.length - 1].split("/")[0])
    const longVal = parseFloat(coords[coords.length - 1].split("/")[1])
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: latVal, lng: longVal },
        zoom: 7
    });
    //parsear las coordenadas
    var coordenadas = [];
    coords.map((val) => {
        var latlng = { lat: parseFloat(val.split("/")[0]), lng: parseFloat(val.split("/")[1]) }
        coordenadas.push(latlng)
    });
    //pintar linea 
    var path = new google.maps.Polyline({
        path: coordenadas,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    path.setMap(map)
}