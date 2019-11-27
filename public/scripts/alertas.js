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
  for(let j = 0; j < count2; j++){
  
    
    let actual2 = JSON.stringify(actual);
    console.log()
    let splits = actual2.split(",");
    var lectura = splits[0];
    var sensor = splits[1];
    var value = splits[2];
    var unit = splits[3];
    var time = splits[4];
    var door = new String ("Door");

    //console.log("sensor"+ sensor);

    // sensoresssssss

    //con esto funciona
    /*
    var sensor2 = JSON.stringify(sensor);
    var splitsSensor= sensor2.split('\\"');
    var s1 = splitsSensor[1];
    var s2 = splitsSensor[3];

    var value2 = JSON.stringify(value); 
    var splitsValue= value2.split('\\"');
    var val1 = splitsValue[1];
    var val2 = splitsValue[3];
    */
    //
    var splitsSensor= sensor.split('"');
    var s1 = splitsSensor[1];
    var s2 = splitsSensor[3];
    var splitsValue= value.split('"');
    var val1 = splitsValue[1];
    var val2 = splitsValue[3];

    // puerta abierta 
    if (s2 === "Door" && val2 === "abierto")
    {
      //console.log(s2 + val2);
      //console.log(actual2);
      dataObject2.push(actual2);


    }
    // sensoressssss
  }

}
}
jsonSensores = JSON.parse(JSON.stringify(dataObject2));
console.log(jsonSensores);

var listItemString = $('#listItem').html();

//dataObject.forEach(buildNewList);
dataObject.forEach(buildNewList);

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
