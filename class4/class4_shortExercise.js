let perfumePicker = {
    rosePerfume : ["\nLove Kills by Masque Milano", "\nEau de Rose by Diptyque", "\nNoir de Noir by Tom For", "\nRose Tonnerre by Frederick Mall", "\nRose Absolue by Annick Gouta", "\nLa Fille de Berlin by Serge Luten", "\nThe Coveted Duchess Rose by Penhaligon'", "\nLe Jardin de la Reign by Oliber", "\nA La Rose by Maison Francis Kurkdjia", "\nLa Colle Noire by Chirstian Dior"],
    jasminePerfume:["\nJasmin Rouge by Tom Ford", "\nLa Religieuse by Serge Lutens", "\nSarrasins by Serge Lutens", "\nBloom by Gucci", "\nOlene by Diptyque", "\nJasmin des Anges by Christian Dior", "\nGrand Bal by Christian Dior", "\nJasminum Sambac by Chloe", "\nA la Nuit by Serge Lutens", "\nDiorissimo by Christian Dior", "\nAshore by Amouage"],
    woodyPerfume: ["\nTacit by Aesop", "\nSantal 33 by Le Labo", "\nOak and Hazel Nut by Jo Malone", "\nTam Dao by Diptyque", "\nHwyl by Aesop", "\nBois D'Argent by Christian Dior","\nOud Wood by Tom Ford", "\nSantal Blush by Tom Ford", "\nSycomore by Chanel", "\nEidesis by Aesop"],
    RosePerfume(){
        console.log("Top 10 rose perfumes picked by us are: " +"\n"+ this.rosePerfume);
    },
    JasminePerfume(){
        console.log("Top 10 jasmine perfumes picked by us are: " +"\n"+ this.jasminePerfume);
    },
    WoodyPerfume(){
        console.log("Top 10 woody perfumes picked by us are: " +"\n"+ this.woodyPerfume);
    },
    pickMyPerfume(){
        question = prompt("Which fragrance note do you prefer\n(currently only rose, jasmine and woody are available): ");
        checkRose = question.includes("rose");
        checkJasmine = question.includes("jasmine");
        checkWoody = question.includes("woody");
        if(checkRose == true){
            this.RosePerfume();
        }
        else if (checkJasmine == true ){
            this.JasminePerfume()
        }
        else if (checkWoody == true){
            this.WoodyPerfume();
        }
    },
};

perfumePicker.pickMyPerfume();



