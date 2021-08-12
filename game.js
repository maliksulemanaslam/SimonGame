var gameStarted = false;

var level = 0;

var userClickedPattern = [];

var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {

  userClickedPattern = [];

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.random();

  randomNumber = Math.floor(randomNumber * buttonColours.length);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

}

$(".btn").on("click touchend", function() {

  if (gameStarted) {
    var userChosenColour = this.id;

    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  }
});


function playSound(name) {
  this.name = name;

  var audio = new Audio('sounds/' + name + '.mp3');

  audio.play(ouchend
}

function animatePress(currentColor) {

  $("." + currentColor).addClass("pressed");

  setTimeout(function() {

    $("." + currentColor).removeClass("pressed");

  }, 100);

}




function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(function() {

        nextSequence();

      }, 1000);
    }
  } else {
    playSound("wrong");

    $("#level-title").text("Game Over, Press Any Key to Restart");

    $("body").addClass("game-over");

    setTimeout(function() {

      $("body").removeClass("game-over");

    }, 200);

    startOver();
  }
}

function startOver() {

  level = 0;

  gamePattern = [];

  gameStarted = false;

}

$(".ok").on("click touchend", function() {
  $(".ok").fadeOut();
  setTimeout(function() {

    $(".play").fadeIn();

  }, 500);
});


$(".play").on("click touchend", function() {
  $(document).on("keypress touchend", function() {

    if (!gameStarted) {

      $("#level-title").text("Level " + level);

      nextSequence();

      gameStarted = true;
    }
  });
  $(".play").fadeOut();

  setTimeout(function() {
    $(".ok, .instructions").slideUp();
  }, 300);
  setTimeout(function() {
      $(".game-screen, #level-title").fadeIn();
  }, 300);

});

$(".game-screen, #level-title , .play").hide();
