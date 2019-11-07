var requestURL = 'https://tesismaletas.herokuapp.com/api/sensores';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
var dataObject = request.response;
console.log(dataObject)
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
