function playCraps() {
    console.log("playCraps() function Started");
    //Returns random number inclusive to 0 but exclusive to 1 now multiplied by 6
    //ceil rounds the number we recive up to a whole number
 var die1 = Math.ceil(Math.random()*6);
 var die2 = Math.ceil(Math.random()*6);
 //adds the 2 numbers together
        var sum = die1 + die2;
        document.write("Die 1 = " + die1);
        document.write("<br/>");
        document.write("Die 2 = " + die2);
        document.write("<br/>");
        document.write("Sum = " + sum);
        document.write("<br/>");
        // It checks sum var to see if equal if its then it does its function saying you lose and can be 7 or 11
       if (sum == 7 || sum == 11) {
           document.write("CRAPS - you lose!");
           document.write("<br/>");
       }
// first checks if statment if its false moves on to this statment and in this statment both have to be true
// for numbers %2 that equal 0 so if 2,2 4,4 6,6 you win on those combinations.
       else if (die1 == die2 && die1 % 2 == 0) {
           document.write("DOUBLES - you win")
           document.write("<br/>")
       } 
       // if the other 2 were not proced this one plays as in turn
       else{
           document.write("Draw-You neither won or lost. Please try agin.");
           document.write("<br/>");
       }

    }

    play();