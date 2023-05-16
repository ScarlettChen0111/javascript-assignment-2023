let fetchMultiButton = document.getElementById("fetchMultiSubmission");
fetchMultiButton.addEventListener("click",FETCHMULTI);

let date = new Date();

let currentTime = date.getHours();

let headerFetchMulti = document.getElementById("headerFetchMulti");
headerFetchMulti.innerHTML = currentTime;



function FETCHMULTI(){
    // fill out the parameters for the url //
    let date = new Date();
    let FROM = document.getElementById("base_Currency_fetchMulti").value;
    let TO = encodeURIComponent(document.getElementById("quote_Currency_fetchMulti").value);
    let APIKEY = document.getElementById("api_Key").value;
    let fetchMultiUrl = `https://api.fastforex.io/fetch-multi?&from=${FROM}&to=${TO}&api_key=${APIKEY}`
    console.log(fetchMultiUrl);
    
    // set the blank for output in html //
    let fetchMultiOutput = document.getElementById("fetchMultiOutput");

      // new AJAX request //
      const xhr = new XMLHttpRequest();
      // initialize //
      xhr.open("GET", fetchMultiUrl,true);

      // test result //
      xhr.onload = function testOutput(){
        if(xhr.status===200){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          fetchMultiOutput.innerHTML = "<success>SUCCESS<br>(づ｡◕‿‿◕｡)づ</success>" +"<br><br><br>" +
          "The amount of "+"1"+" "+"<b>"+textJSON["base"]+"</b>"+" equals to:<br>";
           for(let [cnt,val] of Object.entries(textJSON["results"])){
            fetchMultiOutput.innerHTML += "<br>"+val + " " + cnt+"<br>";
           }
           fetchMultiOutput.innerHTML += "<br><br>"+"Last Update: "+textJSON["updated"];
        }
        else if(xhr.status===400){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          fetchMultiOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Bad Request"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===401){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          fetchMultiOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Not Authorized"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===403){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          fetchMultiOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Forbidden"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===429){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          fetchMultiOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Rate Limit Exceeded"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }

      }
      xhr.send();
  }

  