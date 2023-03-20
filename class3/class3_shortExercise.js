function thankYouLetterGenerator(){
    Name = prompt("Please enter recipient's name:");
    role = prompt("Is the recipient your boss, colleague, or other relationships:")
    loc = prompt("Enter past work location:");
    position = prompt("Enter your last position:");
    YourName = prompt("Please enter your name:");
    currentLocation = prompt("Enter your current working/school location:");
    currentPosition = prompt("Enter your current position:")
    startDate = prompt("Enter the start date of your last position:");
    endDate = prompt("Enter the end date of your last position:")
    timeAfterYouLeft = prompt("How long have you left the position: (e.g. 3 months)")
    whatYouLearned = prompt("Describe what you've learned from \nthe recipient in a few phrases \n (e.g. how to be patient to people)")
    //ImpressiveIncident = prompt("Write a short paragraph that \ndemonstrates the most impressive incident\n between you and the recipient.")
    greeting = prompt("Enter greeting (e.g. Happy New Year, Merry Christmas):")
    console.log("Dear "+ Name + "," + "\n\n  " + 
    "I hope everything is going well for you. " + "This is " + 
    YourName + "." + " We had been working with each other from " + 
    startDate + " to " + endDate + " at "+ loc + "." +  
    " It has been " + timeAfterYouLeft + " since I left"
    + ", " + "and I still remember everything I learned from you." + " I'm currently working "
    + "as a " + currentPosition + " in " + currentLocation + " . " + "You have taught me " + whatYouLearned + "," + " which benefits me a lot in doing my current work. " + 
    "Thank you so much for being an inspiring " + role + "." + "\n" + "  " + "I wish you " + greeting + "!" + "I wish we could have another chance to work together in the future." + "\n  Please take care!" + "\n\nAll the best" + "\n" + YourName)
} 

thankYouLetterGenerator();