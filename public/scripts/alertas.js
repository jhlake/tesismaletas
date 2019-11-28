var requestURL = 'https://tesismaletas.herokuapp.com/api/sensores';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
var dataObject = request.response;
var dataObject2 = [];
var jsonSensores = [];
sensores();


function sensores()
{
  var count = Object.keys(dataObject).length
//console.log(count)
for(let i = 0; i < count; i++){

  let actual = dataObject[i];
  var count2 = Object.keys(actual).length
  //console.log(count2);

    let actual2 = JSON.stringify(actual);
    console.log()
    let splits = actual2.split(",");
    var lectura = splits[0];
    var sensor = splits[1];
    var value = splits[2];
    var unit = splits[3];
    var time = splits[4];
    var door = new String ("Door");
    var splitsSensor= sensor.split('"');
    var s1 = splitsSensor[1];
    var s2 = splitsSensor[3];
    var splitsValue= value.split('"');
    var val1 = splitsValue[1];
    var val2 = splitsValue[3];

    //parse string a number del acelerometro
    //aqui termina

    // puerta abierta 
    if (s2 === "Door" && val2 === "abierto")
    {
      //console.log(s2 + val2);
      //console.log(actual2);
      dataObject2.push(JSON.parse(actual2));
    }
    // sensoressssss
    if (s2 === "Accel")
    {
      var x = parseFloat(val2.split(" ")[1]);
      var y = parseFloat(val2.split(" ")[3]);
      var z = parseFloat(val2.split(" ")[5]);
      var max = new Number('18');
      if (x > max || y > max || z > max)
      {
        //console.log(x + "/" + y + "/" + z);
        dataObject2.push(JSON.parse(actual2));
      }
    }
    if (s2 ==="GPS")
    {
      getDistanceFromLatLonInKm(25.249317,-109.906486,23.496641,-107.719159);

    }

}
}


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1); 
  var a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ; 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c; // Distance in km
  console.log(d);
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

var listItemString = $('#listItem').html();

//dataObject.forEach(buildNewList);
dataObject2.forEach(buildNewList);

function buildNewList(item, index) 
{
    var listItem = $('<li>' + listItemString + '</li>');
    var listItemTitle = $('.sensor', listItem);
    listItemTitle.html(item.sensor);
    var listItemAmount = $('.value', listItem);
    listItemAmount.html(item.value);
    var listItemDesc = $('.unit', listItem);
    listItemDesc.html(item.unit);
    var listTime = $('.time', listItem);
    listTime.html(item.time);
    $('#dataList').append(listItem);
    //console.log(dataObject);
}
  }
