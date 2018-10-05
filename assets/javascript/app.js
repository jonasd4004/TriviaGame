$(document).ready(function () {

  var userPick;

  var correctAnswer = 0;

  var incorrectAnswer = 0;

  var unAnswer = 0;

  var questIndex = 0;

  var images;

  var timer = 30000;

  var musicalQuestion = [
    {
      question: "What is the name of the green witch in Wicked?",
      choices: ["Elphaba", "Galinda", "Madame Morrible", "Nessarose"],
      images: ["../images/elphaba.gif"],
      validAnswer: 0
    },
    {

      question: "Finish this lyric: How does a bastard, orphan, son of a whore and a __________.",
      choices: ["Irishman", "Englishman", "Scotsman", "American"],
      images: ["../images/elphaba.gif"],
      validAnswer: 2
    }, {

      question: "What is Sweeney Todd's profession?",
      choices: ["Mailman", "Barber", "Judge", "Haberdasher"],
      validAnswer: 1
    }, {

      question: "Fill in this lyric: 525,600 ________. How do you measure, measure a year?",
      choices: ["Seconds", "Minutes", "Days", "Hours"],
      validAnswer: 1
    }, {

      question: "Which of these is NOT the name of a jellicle cat?",
      choices: ["Rum Tum Tugger", "Grizabella", "Mr. Mistoffelees", "Mr. Potato"],
      validAnswer: 2
    }, {

      question: "Mandy Patinkin starred in what Sondheim musical about a famous painter?",
      choices: ["The Wild Party", "Gypsy", "Hair", "Sunday in the Park with George"],
      validAnswer: 3
    },
    {
      question: "What musical was also based off of a movie and book written by Alice Walker?",
      choices: ["The Color Purple", "Possessing the Secret of Joy", "The Temple of My Familiar", "Meridian"],
      validAnswer: 0
    }, {

      question: "The musical Chicago was set in which decade?",
      choices: ["50's", "70's", "40's", "20's"],
      validAnswer: 3
    }, {

      question: "True of False: Dreamgirls is the best musical ever?",
      choices: ["False", "True", "I live in a hole in the ground", "I'm hungry"],
      validAnswer: 1
    },
    {

      question: "The musical Aida was written by which famous composer?",
      choices: ["Stephen Schwartz", "Andrew Lloyd Webber", "Stephen Sondheim", "Elton John"],
      validAnswer: 3
    },
  ];

  function startGame() {
    printQuest();
    var questionTimer = setTimeout(toNextQuestion, timer);

    function toNextQuestion() {
      questIndex++;
      clearTimeout(questionTimer);
      console.log(questIndex);
      if (questIndex == musicalQuestion.length) {
        console.log('no more quesitons');
      } else {
        $(".answerBox").text("");
        printQuest();
        incorrectAnswer++;
        //reset questionTimer;
        questionTimer = setTimeout(toNextQuestion, timer);
      }
    }

    $(document).on("click", ".answer", function () {
      userPick = $(this).attr("id");
      // console.log(userPick);

      if (userPick == musicalQuestion[questIndex].validAnswer) {
        console.log("answerCorrect");
        toNextQuestion();
        correctAnswer++;
        console.log(correctAnswer);
      } else {
        incorrectAnswer++;
        toNextQuestion();
        console.log("answerIncorrect");
      }
    });
  }


  function printQuest() {
    $("#question").text(musicalQuestion[questIndex].question);
    console.log(musicalQuestion[questIndex].choices);
    //call timer function in here

    for (var i = 0; i < musicalQuestion[questIndex].choices.length; i++) {
      var answerDiv = $("<p>").addClass("answer").attr({ "id": i }).html(musicalQuestion[questIndex].choices[i]);
      $(".answerBox").append(answerDiv);

    }
  }

  // need a start button function to start the game
  $("#startButton").on("click", function () {
    startGame();
    $("#startButton").hide();
  })



});
