// Select random word to guess
window.onload = function () {



  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'
  var categories = [
    ["pakistan", "canada", "Romania", "australia"],
    ["inception", "inside out", "revenant", "matrix", "transcendence"],
    ["snake", "zebra", "lion", "human", "chicken"]
  ];

  //var inter;
  var hints = [
    ["Country in Asia", "Country in North America", "Country In South America", "Country famous for Kangaroos"],
    ["Fantasy/Mystery film", "Animated movie about feelings", "Movie about survival", "Virtual Reality concept movie", "A movie about AI"],
    ["A reptile", "A herbivore with lines", "King of the jungle", "Social animal", "We love eating"]
  ]; // hints for categories and words

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hintButton");
  var showClue = document.getElementById("hint");

  // audio files
  var backgroundMusic = new Audio();
  backgroundMusic.src = "~/../../Music/background-music.mp3";

  var idiot = new Audio();
  idiot.src = "~/../../Music/idiot.mp3";

  var die = new Audio();
  die.src = "~/../../Music/die.mp3";

  var myBoy = new Audio();
  myBoy.src = "~/../../Music/myBoy.mp3";

  var pro = new Audio();
  pro.src = "~/../../Music/pro.mp3";

  var winner = new Audio();
  winner.src = "~/../../Music/winner.mp3";

  var chalk = new Audio();
  chalk.src = "~/../../Music/chalk.mp3";

  var gameOver = new Audio();
  gameOver.src = "~/../../Music/gameOver.mp3";



  // create alphabet ul
  function buttons() {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }


  // Select Catagory
  function selectCat() {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Countries";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Animals";
    }
  }

  // Create geusses ul
  function result() {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      geusses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  // Show lives
  function comments() {
    showLives.innerHTML = "You have " + lives + " lives";
    if(lives == 1)
    {
      showLives.innerHTML = "Careful you have " + lives + " life left";
      showLives.style.color = "red";
    }
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      showLives.style.color = "red";
      backgroundMusic.pause();
      idiot.pause();
      die.pause();
      gameOver.play();
      
    }
    for (var i = 0; i < geusses.length; i++) {
      if (counter + space === geusses.length) {
        showLives.innerHTML = "You Win!";
        backgroundMusic.pause();
        pro.pause();
        myBoy.pause();
        winner.play();
      }
    }
  }

  // Animate man
  function animate() {
    var drawMe = lives ;
    drawArray[drawMe]();
  }


  // Hangman canvas 
  function canvas(){

    myStickman = document.getElementById("stickman");
    myStickman.width  = 300;
    myStickman.height = 200;
    context = myStickman.getContext('2d');

    //context.beginPath();
    context.strokeStyle = "#000";
    context.lineWidth = 2;
  };

  function head(){

    chalk.play();
    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "red";
    context.arc(60, 25, 10, 0, Math.PI*2, true);
    context.stroke();

  }



  function draw(pathFromx, pathFromy, pathTox, pathToy, drawType) {

    var counter = 0;
    var amount = 0;

    chalk.volume = 1.0;
    chalk.play();
      switch (drawType)
      {
        case "line1":

          context.beginPath();
          context.strokeStyle = "whitesmoke";
          context.moveTo(pathFromx, pathFromy);
          // lerp : a  + (b - a) * f
          context.lineTo(pathTox,pathToy);
          context.stroke();

          break;
        case "line2":
          context.beginPath();
          context.strokeStyle = "whitesmoke";
          context.moveTo(pathFromx, pathFromy);
          // lerp : a  + (b - a) * f
          context.lineTo(pathTox,pathToy);
          context.stroke();
          break;
        case "line3":
          context.beginPath();
          context.strokeStyle = "whitesmoke";
          context.moveTo(pathFromx, pathFromy);
          // lerp : a  + (b - a) * f
          context.lineTo(pathTox,pathToy);
          context.stroke();
          break;
        case "line4":
          context.beginPath();
          context.strokeStyle = "whitesmoke";
          context.moveTo(pathFromx, pathFromy);
          // lerp : a  + (b - a) * f
          context.lineTo(pathTox,pathToy);
          context.stroke();
          break;
        case "torso":
          context.beginPath();
          context.strokeStyle = "whitesmoke";
          context.moveTo(pathFromx, pathFromy);
          // lerp : a  + (b - a) * f
          context.lineTo(pathTox,pathToy);
          context.stroke();
          break;
        case "rightArm":
          context.beginPath();
          context.strokeStyle = "#EDFA00";
          context.moveTo(pathFromx, pathFromy);
          // lerp : a  + (b - a) * f
          context.lineTo(pathTox,pathToy);
          context.stroke();
          break;
        case "leftArm":
          context.beginPath();
          context.strokeStyle = "#EDFA00";
          context.moveTo(pathFromx, pathFromy);
          // lerp : a  + (b - a) * f
          context.lineTo(pathTox,pathToy);
          context.stroke();
          break;
        case "rightLeg":
          context.beginPath();
          context.strokeStyle = "#3340D4";
          context.moveTo(pathFromx, pathFromy);
          // lerp : a  + (b - a) * f
          context.lineTo(pathTox,pathToy);
          context.stroke();
          break;
        case "leftLeg":
          context.beginPath();
          context.strokeStyle = "#3340D4";
          context.moveTo(pathFromx, pathFromy);
          // lerp : a  + (b - a) * f
          context.lineTo(pathTox,pathToy);
          context.stroke();
          break;


      }



  }

  function frame1() {
    draw (0, 200, 150, 200, "line1");
  }

  function frame2() {
    draw (10, 0, 10, 600, "line2");
  }

 function frame3() {
    draw (0, 5, 70, 5, "line3");
  }

  function  frame4() {
    draw (60, 5, 60, 15, "line4");
  }

  function torso() {
    draw (60, 36, 60, 70, "torso");
  }

 function rightArm() {
    draw (60, 46, 100, 50, "rightArm");
  }

  function leftArm() {
    draw (60, 46, 20, 50, "leftArm");
  }

  function rightLeg() {
    draw (60, 70, 100, 100, "rightLeg");
  }

  function leftLeg() {
    draw (60, 70, 20, 100, "leftLeg");
  }

  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1];


  // OnClick Function
  function check () {
    list.onclick = function () {
      var geuss = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === geuss) {
          geusses[i].innerHTML = geuss;
          counter += 1;
          debugger;
          var randForSound = Math.floor(Math.random() * 2);
          if(randForSound ==1 )
          {
            myBoy.play();

          }
          else
          {
            pro.play();

          }
        }
      }
      var j = (word.indexOf(geuss));
      if (j === -1) {
        var randForSound = Math.floor(Math.random() * 2);
        lives -= 1;
        comments();
        animate();
        if(lives > 1)
        {
          if(randForSound ==1 )
          {
            idiot.play();
          }
          else
          {
            die.play();
          }
        }
      }
      else {
        comments();
      }
    }
  }


  // Play
  function play () {


    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, "-");
    console.log(word);
    buttons();

    geusses = [ ];
    lives = 10;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
    backgroundMusic.addEventListener('ended', function() {
      this.currentTime = 0;
      this.play();
    }, false);
    backgroundMusic.play();
  }

  // Hint
  function showHint()
  {
    debugger;
    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex;
    if(word.indexOf("-") >=0)
    {
      var str = word.replace(/-/g , " ");
      hintIndex = chosenCategory.indexOf(str);
    }
    else
    {
      hintIndex = chosenCategory.indexOf(word);
    }

    showClue.innerHTML = "Hint:" +  hints [catagoryIndex][hintIndex];
  }

  // Reset
  function resetGame()
  {
    debugger;
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHTML = "Hint";
    showLives.style.color = "white";
    context.clearRect(0, 0, 400, 400);
  }

  // mute/unmute
  function muteSound(isMute) {
    if(isMute)
    {
      backgroundMusic.muted = true;
      idiot.muted = true;
      myBoy.muted = true;
      pro.muted = true;
      die.muted = true;
      winner.muted = true;
      chalk.muted = true;
      gameOver.muted = true;
    }
    else
    {
      backgroundMusic.muted = false;
      idiot.muted = false;
      myBoy.muted = false;
      pro.muted = false;
      die.muted = false;
      winner.muted = false;
      chalk.muted = false;
      gameOver.muted = false;

    }

  }




  getHint.onclick = function() {

    showHint();
  };

  document.getElementById('resetButton').onclick = function() {

    resetGame();
    play();
  };

  document.getElementById('mute').onclick = function () {
    muteSound(true);
  };
  document.getElementById('unMute').onclick = function () {
    muteSound(false);
  };

  document.getElementById('exit').onclick = function ()
  {
    window.location.href = "../index.html";
  };

  play();
};