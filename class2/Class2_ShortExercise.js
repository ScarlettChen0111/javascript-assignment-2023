/*1. Conditions:
Find the current time using the Date() function.
Extract the hour from it. Create a condition to 
check if it's the morning, evening, afternoon or night. 
Use console.log to output an appropriate message. */

let date = new Date();
let currentTime = date.getHours();
//console.log(date);
//console.log(currentTime);
if(currentTime<12){
    console.log("It's " + date + ". "+". \nIt's morning.")
}
else{
    console.log("It's " + date + ". " + ". \nIt's afternoon/evening.")
}


/* 2. Loops:
Use the same random dice generator as above to generate a number between 1 and 6. 
Now create a loop that keep rolling until the number generated is more than 3. 
As soon as you get a number more than three, the loop should end. Output how many times the loop ran before it reached this number. 
Be careful with this - if you create a loop that has no way to end (due to a faulty check), it will easily crash your browser!*/

do
{dice = Math.ceil(6*Math.random());
console.log("You rolled a " + dice);}
while(dice<=3);

console.log("Your final is " + dice + ".")



/*3. Loops
Using loops , create a triangular pattern (using console.log statements only for now) like this:
#
##
###
#### */

/*let a = 1;

while(a<5){
    console.log("o".repeat(a));
    a++;
}
while(a>=1){
    console.log("o".repeat(a));
    a--;
}*/

/* 4. Loops and Conditions:

Using more loops and conditions, 
create a chess board using # and space ' ' using 
console.log statements.  
You could consider using a loop inside a 
loop to create the alternative pattern. 
A chess board  has  8 x 8 = 64 squares. */

let y = 1;
let x = 8;

while(y <= 8){
    console.log(+"o".repeat(x));  
    y++;
}