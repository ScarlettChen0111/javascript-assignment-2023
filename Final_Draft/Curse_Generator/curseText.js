let curseText = document.getElementById("curseText");
let curseButton = document.getElementById("curseButton");


curseButton.addEventListener("click",cursePick);






function cursePick(){
    // Generate a random number for the curse # //

    //New AJAX request//
    const xhr = new XMLHttpRequest();
    // initialize //
    xhr.open("GET", "curse.json",true);

    //Test Result//
    xhr.onload=function seeCurse(){
        curseText.innerHTML="";
        if(xhr.status===200){
            curse=JSON.parse(xhr.responseText);
            console.log(curse);
            let min = 1;
            let max = Object.keys(curse.Curse).length;
            let num = Math.floor(Math.random() * (max - min + 1) ) + min;

            curseText.innerHTML+=curse["Curse"][`${num}`];
        }
        else if(xhr.status===400){

            curseText.innerHTML = ":(";
          }
          else if(xhr.status===401){

            curseText.innerHTML = ":(";
          }
          else if(xhr.status===403){

            curseText.innerHTML = ":(";
          }
    }
    xhr.send();

 }