fetch(urlFetchAll)
  .then(function(r) {
    return r.json();
  })
  .then(function(textJSON) {

    for ( let [cnt,val] of Object.entries(textJSON["results"]) ) {
      console.log(cnt,val);
      fetchAllList.innerHTML += cnt + ": " + val;
    }
    // for(var i = 0; i<textJSON["results"].length; i++){
    //     fetchAllList.innerHTML=textJSON["results"][i];
    // }
    fetchAllOutput.innerHTML = "SUCCESS<br>(づ｡◕‿‿◕｡)づ" +"<br>"+"<br>" +
    "1 "+textJSON["base"]+" equals to:"+fetchAllList.innerHTML;


})
  .catch(function(err) {
    document.getElementById("Output").innerHTML = "There was an error";
    console.log(err);
  });
