document.getElementById("myForm").addEventListener("click", function(event){
    event.preventDefault()
    //Cargar cosas al front
    var p = document.getElementById('insertNumber').value.split(' ')
    var params={ 
        airline:p[0],
        flightNumber:p[1]
    }
    console.log(params)
    var requestURL = 'http://localhost:3000/api/scrap';
    var request = new XMLHttpRequest();
    request.open('POST', requestURL, true);
    request.responseType = 'json';
    request.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    request.send(JSON.stringify(params));

    request.onload = function(){
        var info = request.response;
        console.log(info)
        document.getElementById("arrival").innerHTML= info.arrival
        document.getElementById("departure").innerHTML= info.departure
        document.getElementById("timeFlight").innerHTML= info.scheduled
        document.getElementById("status").innerHTML= info.status
        document.getElementById("numVuelo1").innerHTML= p[0]
        document.getElementById("numVuelo2").innerHTML= p[1]
        document.getElementById("ticket").style.visibility="visible";
    }
  });