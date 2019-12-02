document.getElementById("myForm").addEventListener("click", function(event){
    event.preventDefault()
    //Cargar cosas al front
    var p = document.getElementById('insertNumber').value.split(' ')
    var params={
        'airline': p[0] ,
        'flightNumber': p[1]
    }
    console.log(params)
    var requestURL = 'https://tesismaletas.herokuapp.com/api/scrap';
    var request = new XMLHttpRequest();
    request.open('POST', requestURL, true);
    request.responseType = 'json';
    request.setRequestHeader('Content-type', 'application/json');
    request.send(params);

    request.onload = function(){
        var info = request.response;
        console.log(info)
    }
  });