//https://api.fastforex.io/time-series?from=USD&to=CNY&start=2022-10-30&end=2023-04-01&api_key=6f2ce5bc1b-159b05d096-rr6p6i//


let fetchAllButton = document.getElementById("timeSeries");
fetchAllButton.addEventListener("click",TIMESERIES);

let date = new Date();
let headerTimeSeries = document.getElementById("headerTimeSeries");
headerTimeSeries.innerHTML = date;

function TIMESERIES(){
    // fill out parameters for url //
    let FROM = document.getElementById("base_Currency_timeSeries").value;
    let TO = document.getElementById("quote_Currency_timeSeries").value;
    let APIKEY = document.getElementById("api_Key").value;
    let START = document.getElementById("starting_date").value;
    let END = document.getElementById("ending_date").value; 
    let urltimeSeries = `https://api.fastforex.io/time-series?from=${FROM}&to=${TO}&start=${START}&end=${END}&api_key=${APIKEY}`

    // set the blank for output in html //
    let timeSeriesOutput = document.getElementById("timeSeriesOutput");

      // new AJAX request //
      const xhr = new XMLHttpRequest();
      // initialize //
      xhr.open("GET", urltimeSeries,true);

      // test result //
      xhr.onload = function testOutput(){
        if(xhr.status===200){
          text = xhr.responseText;
          textJSON = JSON.parse(text);  

          timeSeriesOutput.innerHTML = "<success>SUCCESS<br>(づ｡◕‿‿◕｡)づ</success>" +"<br>"+"<br>" +
          "From "+"<b>"+textJSON["start"]+"</b>"+" to "+"<b>"+textJSON["end"]+"</b>"+","+"<br><br>"+"1 "+`${FROM}`+ " =<br>";

          for ( let [cnt,val] of Object.entries(textJSON["results"][`${TO}`]) ) {
            console.log(cnt,val);
            timeSeriesOutput.innerHTML+= "<br><br>"+val+" "+`${TO}`+ " on " +cnt+"<br><br>";
          }
        }

        else if(xhr.status===400){
          text = xhr.responseText;
          textJSON = JSON.parse(text);  
          timeSeriesOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Bad Request"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===401){
          text = xhr.responseText;
          textJSON = JSON.parse(text);  
          timeSeriesOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Not Authorized"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===403){
          text = xhr.responseText;
          textJSON = JSON.parse(text);  
          timeSeriesOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Forbidden"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===429){
          text = xhr.responseText;
          textJSON = JSON.parse(text);  
          timeSeriesOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Rate Limit Exceeded"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }

      }
      xhr.send();
  }
