var requestURL = 'https://tesismaletas.herokuapp.com/api/sensores';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
var dataObject = request.response;
var count = Object.keys(dataObject).length
//console.log(count)
for(let i = 0; i < count; i++){

  let actual = dataObject[i];
  var count2 = Object.keys(actual).length
  //console.log(count2);
  for(let j = 0; j < count2; j++){
  
    let actual2 = JSON.stringify(actual);
    let splits = actual2.split(",");
    var lectura = splits[0];
    var sensor = splits[1];
    var value = splits[2];
    var unit = splits[3];
    var time = splits[4];

  }

}

var listItemString = $('#listItem').html();
  
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
