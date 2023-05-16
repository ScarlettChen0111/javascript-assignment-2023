let historicalButton = document.getElementById("historicalSubmission");
historicalButton.addEventListener("click",HISTORICAL);

let date = new Date();
let headerHistorical = document.getElementById("headerHistorical");
headerHistorical.innerHTML = date;
function HISTORICAL(){
    // fill out the parameters for the url //
    let date = new Date();
    let FROM = document.getElementById("base_Currency_historical").value;
    let TO = encodeURIComponent(document.getElementById("quote_Currency_historical").value);
    let DATE = document.getElementById("historicalDate").value;
    let APIKEY = document.getElementById("api_Key").value;
    let historicalUrl = `https://api.fastforex.io/historical?date=${DATE}&from=${FROM}&to=${TO}&api_key=${APIKEY}`
    console.log(historicalUrl);
    
    // set the blank for output in html //
    let historicalOutput = document.getElementById("historicalOutput");

      // new AJAX request //
      const xhr = new XMLHttpRequest();
      // initialize //
      xhr.open("GET", historicalUrl,true);

      // test result //
      xhr.onload = function testOutput(){
        if(xhr.status===200){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          historicalOutput.innerHTML = "<success>SUCCESS<br>(づ｡◕‿‿◕｡)づ</success>" +"<br><br><br>" +
          "On "+"<b>"+textJSON["date"]+"</b>"+",<br><br>"+"The amount of "+"1"+" "+"<b>"+textJSON["base"]+"</b>"+" equals to:<br>";
           for(let [cnt,val] of Object.entries(textJSON["results"])){
            historicalOutput.innerHTML += "<br>"+val + " " + cnt+"<br>";
           }
        }
        else if(xhr.status===400){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          historicalOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Bad Request"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===401){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          historicalOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Not Authorized"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===403){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          historicalOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Forbidden"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===429){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          historicalOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Rate Limit Exceeded"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }

      }
      xhr.send();
  }

  