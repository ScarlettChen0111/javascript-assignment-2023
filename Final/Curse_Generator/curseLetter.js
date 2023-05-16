let curseLetterButton = document.getElementById("curseLetterButton");
let letter = document.getElementById("letter");

curseLetterButton.addEventListener("click", curseEmail);





    function curseEmail(){
      letter.innerHTML="";
      let emailEnding = ["No Regards","Cold Regards","Fare-The-Fucking-Well","Retards","Insincerely","Please burn after read","Later Loser"];
      let hateName = document.getElementById("hateName").value;
      let yourName = document.getElementById("yourName").value;
      let adj = document.getElementById("adj").value;
      let curseText = document.getElementById("text").value;
      let min = 0;
      let max = emailEnding.length;
      let num = Math.floor(Math.random() * (max - min) ) + min
      letter.innerHTML += "Dear "+hateName+","+"<br><br>"+"  "+"  You are reading this email because of what you've said and done to me. "+`You are such a ${adj} person. `+"As a creative professional, I'd like to give you my best wish. "+"I wish that "+curseText+" "+"If I accidentally give you a heart attack by saying all these things, no doubt about it, I AM INTENTIONAL.  "+"You get what you deserve."+"<br><br>"+emailEnding[`${num}`]+","+"<br>"+yourName
      



    }
    



    