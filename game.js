// Get user name

askName();

function askName() {
    console.log("Test");
   var userName = "";
   userName = prompt("Hi I am James. Who are you?");
   document.getElementById('answer1').innerHTML = "Hi " + userName + ", read my site to learn more about me.";
  }

// Count right answers
    var countCorrect = 0;

askQuestion("What is my hometown?", "Redding", "result1");
askQuestion("What city did I live in Japan?", "Toyonaka", "result2");
askQuestion("What university did I attend?", "Santa Clara", "result3");



function askQuestion(question, answer, result) {
  var guess = prompt(question);
console.log("question1");
  if (guess.toUpperCase() === answer.toUpperCase()) {
    countCorrect++;
    document.getElementById(result).innerHTML = "Correct";
  } else {
    document.getElementById(result).innerHTML = "Sorry, wrong answer.";
  }
}

    //
    //     // Guess my hometown
    //       var city = prompt("OK, now that you read my site, answer 3 questions about me. \n What town did I gow up in?");
    //         var testCity = city.toUpperCase();
    //           console.log(testCity);
    //       if (testCity === "REDDING" || testCity === "REDDING, CA" || testCity === "REDDING, CALIFORNIA") {
    //         alert("Redding is Correct!");
    //         countCorrect++;
    //         console.log(countCorrect);
    //         } else {
    //           alert("Sorry, I grew up in Redding");
    //         };
    //
    //   // Guess the city in Japan where I lived
    //     var japan = prompt("In what city in Japan did I live?");
    //         var testJapan = japan.toUpperCase();
    //             console.log(testJapan);
    //         if (testJapan === "TOYONAKA" || testJapan === "TOYONAKA, JAPAN") {
    //             alert("That is correct!!");
    //             countCorrect++;
    //             console.log(countCorrect);
    //           } else {
    //             alert("Sorry, I lived in Toyonaka.");
    //           };
    //
    //   // Guess my school
    //       var university = prompt("Which University to I attend for my BS degree?");
    //             var testUniversity = university.toUpperCase();
    //               console.log(testUniversity);
    //           if (testUniversity === "SANTA CLARA" || testUniversity === "SANTA CLARA UNIVERSITY" || testUniversity === "SCU") {
    //             alert("Correct! Go Broncos!!");
    //             countCorrect++;
    //               console.log(countCorrect);
    //           } else {
    //             alert("Sorry, I went to Santa Clara University");
    //           };
    //
    // // Send out the results of countCorrect
    //   //alert("You got " +countCorrect+ " out of 3 correct!");
    //
    //       switch (countCorrect) {
    //         case 0:
    //           alert("You don't know at all " +userName+ "ZERO CORRECT");
    //           break;
    //         case 1:
    //           alert("Well at least you got ONE right "+userName+".");
    //           break;
    //         case 2:
    //           alert("Nice "+userName+ " you got TWO right!");
    //           break;
    //         case 3:
    //           alert("Awesome "+userName+ " you got them ALL right!!");
    //           break;
    //         default:
    //           alert("Thanks for playing.");
    //         };
    //
      // Guess a number between 1 and 10

      //
      //     var myNumber = 4;
      //     var guess = parseInt(prompt("Guess a number between 1 - 10"));
      //             console.log(guess);
      //             if (guess === myNumber) {
      //                   alert("Correct!");
      //                 } else if (guess < myNumber) {
      //                   alert("Too low");
      //                 } else {
      //               alert("Too high");
      //           };
      //
      // // Guess a number between 1 and 10 until correct
      //     var anotherGuess;
      //     var targetNumber = 8;
      //         while (anotherGuess != targetNumber) {
      //           anotherGuess = parseInt(prompt("Let's try to guess a number between 1 - 10 again.\nThis time you'll keep guessing till you get it right."));
      //                 console.log(anotherGuess);
      //             if (anotherGuess < 1 || anotherGuess > 10 || isNaN(anotherGuess)) {
      //               alert("Please enter a NUMBER between 1 - 10 ONLY");
      //             }
      //               else if (anotherGuess === targetNumber) {
      //                   alert("Correct!");
      //                   } else if (anotherGuess < targetNumber) {
      //                     alert("Too low");
      //                     } else {
      //                         alert("Too high");
      //                       }
      //                   };
