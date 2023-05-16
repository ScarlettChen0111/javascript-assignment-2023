let fetchAllButton = document.getElementById("fetchALL");
fetchAllButton.addEventListener("click",FETCHALL);

let date = new Date();
let headerfetchAll = document.getElementById("headerfetchAll");
headerfetchAll.innerHTML = date;

function FETCHALL(){
    // fill out parameters for url //
    let date = new Date();
    let FROM = document.getElementById("base_Currency_fetchAll").value;
    let APIKEY = document.getElementById("api_Key").value;
    let urlFetchAll = `https://api.fastforex.io/fetch-all?from=${FROM}&api_key=${APIKEY}`

    // set the blank for output in html //
    let fetchAllOutput = document.getElementById("Output_fetchAll");

      // new AJAX request //
      const xhr = new XMLHttpRequest();
      // initialize //
      xhr.open("GET", urlFetchAll,true);

      // test result //
      xhr.onload = function testOutput(){
        if(xhr.status===200){
          text = xhr.responseText;
          textJSON = JSON.parse(text);  
          fetchAllOutput.innerHTML = "<success>SUCCESS<br>(づ｡◕‿‿◕｡)づ</success>" +"<br>"+"<br><br>" +
          "1 "+"<b>"+textJSON["base"]+"</b>"+" equals to:";
          for ( let [cnt,val] of Object.entries(textJSON["results"]) ) {
            console.log(cnt,val);
            fetchAllOutput.innerHTML += "<br><br>"+val+" "+cnt;
            //fetchAllList += "<br><br>"+val+" "+cnt+"<br><br>";
          }
          fetchAllOutput.innerHTML += "<br><br>"+"Last Update: "+textJSON["updated"];
          // for(var i = 0; i<textJSON["results"].length; i++){
          //     fetchAllList.innerHTML=textJSON["results"][i];
          // }
          
        }

        else if(xhr.status===400){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          fetchAllOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Bad Request"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===401){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          fetchAllOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Not Authorized"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===403){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          fetchAllOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Forbidden"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }
        else if(xhr.status===429){
          text = xhr.responseText;
          textJSON = JSON.parse(text);
          fetchAllOutput.innerHTML = "<failExpression>FAILED<br>(╥╯^╰╥)</failExpression>" + "<br><br>"+"<failStatus>"+xhr.status + "<br><br>"+"Rate Limit Exceeded"+"<br><br>"+"</failStatus>"+"<fail>"+textJSON["error"]+"</fail>";
        }

      }
      xhr.send();
  }
