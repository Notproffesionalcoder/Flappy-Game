getKeyValue("highscore", function (value) {
  setText("highscoreText", "Highscore: " + value);
});

onEvent("playButton", "click", function(event) {
  autoPlay = false;
  initializePlay();
});

onEvent("AIbutton", "click", function(event) {
  autoPlay = true;
  initializePlay();
});

// mouse click
onEvent("play", "click", function(event) {
  if (!canPlay){ canPlay = true; }
  else if (!lost && !autoPlay) { velocityY = jumpVelocity; }
});

// key press
onEvent("play", "keydown", function(event) {
  if (!autoPlay){
    if (!canPlay){ canPlay = true;  }
    else if (!lost) {velocityY = jumpVelocity;}
    else {initializePlay();}
  }
});

onEvent("replayButton", "click", function(event) {
