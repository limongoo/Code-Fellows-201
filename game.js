v        var userName = prompt("Hi I am James. Who are you?");
          if (userName === "") {
            userName = "Dummy";
        };
        alert("Hi " + userName + ", read my site to learn more about me.");

          var city = prompt("OK, now that you read my site, answer 3 questions about me. \n What town did I gow up in?");
            var testCity = city.toUpperCase();
              console.log(testCity);
          if (testCity === "REDDING" || testCity === "REDDING, CA" || testCity === "REDDING, CALIFORNIA") {
            alert("Redding is Correct!");
            } else {
              alert("Sorry, I grew up in Redding");
            };

          var japan = prompt("In what city on Japan did I live?");
              var testJapan = japan.toUpperCase();
                console.log(testJapan);
                if (testJapan === "TOYONAKA" || testJapan === "TOYONAKA, JAPAN") {
                alert("That is correct!!");
              } else {
                alert("Sorry, I lived in Toyonaka.");
              };

          var university = prompt("Which University to I attend for my BS degree?");
                var testUniversity = university.toUpperCase();
                  console.log(testUniversity);
              if (testUniversity === "SANTA CLARA" || testUniversity === "SANTA CLARA UNIVERSITY" || testUniversity === "SCU") {
                alert("Correct! Go Broncos!!");
              } else {
                alert("Sorry, I went to Santa Clara University");
              };
