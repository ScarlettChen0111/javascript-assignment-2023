let convertButton = document.getElementById("convertSubmission");
convertButton.addEventListener("click",CONVERT);

let date = new Date();
let headerConvert = document.getElementById("headerConvert");
headerConvert.innerHTML = date;
function CONVERT(){
    // fill out the parameters for the url //
    let date = new Date();
    let FROM = document.getElementById("base_Currency").value;
    let TO = document.getElementById("quote_Currency").value;
    let amount = document.getElementById("amount").value;
    let APIKEY = document.getElementById("api_Key").value;
    url = `https://api.fastforex.io/convert?from=${FROM}&to=${TO}&amount=${amount}&api_key=${APIKEY}`
    
    // set the blank for output in html //
    let convertOutput = document.getElementById("convertOutput");

      // new AJAX request //
      const xhr = new XMLHttpRequest();
      // initialize //
      xhr.open("GET", url,true);

      // test result //
      xhr.onload = function testOutput(){
        if(xhr.status===200){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          convertOutput.innerHTML = "<success>SUCCESS<br>(づ｡◕‿‿◕｡)づ</success>" +"<br>"+"<br>" +
           "The amount of "+textJSON["amount"]+" "+textJSON["base"]+" equals to "+textJSON["result"][`${TO}`]+" "+TO+"."+"<br><br>"
           +"The current rate is "+textJSON.result["rate"]+"."+"<br><br>";
        }
        else if(xhr.status===400){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          convertOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Bad Request"+"<br><br>"+"<failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===401){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          convertOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Not Authorized"+"<br><br>"+"<failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===403){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          convertOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Forbidden"+"<br><br>"+"<failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===429){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          convertOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Rate Limit Exceeded"+"<br><br>"+"<failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }

      }
      xhr.send();
  }

  