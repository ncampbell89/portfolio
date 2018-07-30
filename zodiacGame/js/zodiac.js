const animalsBase = [
    { eng: "chicken", chi: "ji", pin: "ji&#772;", year: 2017 },
    { eng: "cow", chi: "niu", pin: "niu&#769;", year: 2009 },
    { eng: "dog", chi: "gou", pin: "gou&#780;", year: 2018 },
    { eng: "dragon", chi: "long", pin: "lo&#769;ng", year: 2012 },
    { eng: "goat", chi: "yang", pin: "ya&#769;ng", year: 2015 },
    { eng: "horse", chi: "ma", pin: "ma&#780;", year: 2014 },
    { eng: "monkey", chi: "hou", pin: "ho&#769;uzi", year: 2016 },
    { eng: "pig", chi: "zhu", pin: "zhu&#772;", year: 2019 },
    { eng: "rabbit", chi: "tu", pin: "tu&#768;zi", year: 2011 },
    { eng: "rat", chi: "shu", pin: "la&#780;oshu&#780;", year: 2008 },
    { eng: "snake", chi: "she", pin: "she&#769;", year: 2013 },
    { eng: "tiger", chi: "hu", pin: "la&#780;ohu&#780;", year: 2010 }
];

// Variables for quiz mode
let animals = []; // Copy of array that we can modify freely
let currentAnimal = 0; // Current animal to guess
let totalAttempts = 0;
let numCorrect = 0;
let isQuiz = false; // default is teach/learn mode, not quiz mode
// End quiz mode variables



const bigPic = new Image();

const bigPicDiv = document.getElementById('bigPicDiv');
const thumbsDiv = document.getElementById('thumbsDiv');
const animalPen = document.getElementById('animalPen');
const chinCharDiv = document.getElementById('chinChar');

/* Quiz mode elements */
const footer = document.createElement('footer');
const quizBtn = document.createElement('button');
const playAgain = document.createElement('button');
const resumeGame = document.createElement('button');

// spinning zodiac wheel that appears on page load
const wheel = new Image();
wheel.src = 'img/chinese-zodiac/zodiac-animal-wheel.png';
bigPicDiv.appendChild(wheel);

let currentRotation = 0;

function spinWheel() {
  currentRotation++;
  if(currentRotation == 360){
    currentRotation = 0;
  }
  wheel.style.transform = `rotate(${currentRotation}deg)`;
}

let wheelInterval = setInterval(spinWheel, 30);

const sound = new Audio();

/*
Initialization(everything that occurs on page load):
  Loop through an animals array, which will be an array of objects
  Each object will contain the English, Chinese and Pinyin of each animal
  An addEventListener will be applied to each of these buttos we create, to call the function defined above.
  Setup an Audio object to be used within the onclick function
*/
function initializeImages() {
  for(let i = 0; i < animalsBase.length; i++){
    let thumbPic = new Image();
    thumbPic.src = `img/chinese-zodiac/${animalsBase[i].eng}.jpg`;
    thumbPic.eng = animalsBase[i].eng;
    thumbPic.chi = animalsBase[i].chi;
    thumbPic.pin = animalsBase[i].pin;
    thumbPic.id = i; // Store the index this animal is located at
    thumbPic.addEventListener('click', animalClick);
    animalPen.appendChild(thumbPic);
  }
    
    /* Buttons and footer for quiz mode: */
    /* A footer to contain the buttons*/
    /* Two buttons - Quiz and Play again. Play again will be hidden by default */ 
  
  document.querySelector('#container').appendChild(footer);
    footer.appendChild(quizBtn);
    footer.appendChild(playAgain);
    
    quizBtn.innerHTML = "Quiz Me!";
    quizBtn.addEventListener('click', resetBoard);
    
    playAgain.innerHTML = "Play Sound Again";
    playAgain.addEventListener('click', repeatSound);
    playAgain.style.display = "none";
    
  
}

initializeImages();

/*
When an animal is clicked:
  Make the appropriate animal appear in the right hand div
  Beneath the picture, display the English name
  Next to the english name, we will display the pinyin spelling, and the tone markings
  An mp3 with the animal's name in chinese and english will play
  Chinese character appears

*/

function animalClick(e){

  if(!isQuiz){
    // Not in quiz mode
    sound.src = `audio/${e.target.eng}.mp3`; // Get the sound that belongs to the animal clicked on
    sound.play(); // Play the mp3

    bigPic.src = `img/chinese-zodiac/${e.target.eng}.jpg`; // Replace the big image
    bigPicDiv.innerHTML = ""; // so that the original image disappears
    bigPicDiv.appendChild(bigPic);
      
    // Display the English name under the animal
    bigPicDiv.innerHTML += e.target.eng;
      
    // Display the Pinyin
    bigPicDiv.innerHTML += " - " + animalsBase[e.target.id].pin;

    chinCharDiv.style.backgroundImage = `url(img/chinese-zodiac/char-${e.target.chi}.jpg)`;
    chinCharDiv.style.backgroundRepeat = "no-repeat";
    chinCharDiv.style.backgroundPosition = "center";
    chinCharDiv.style.backgroundSize = "contain";
    chinCharDiv.style.backgroundColor = "#FFF";
    chinCharDiv.style.display = "block";
      
  }else{
    // Quiz Mode
    totalAttempts++;
      
    chinCharDiv.style.display = "none";
    
    // Look at the animal that was clicked
    if(e.target.eng === animals[currentAnimal].eng){
      // If it matches our random animal(currentAnimal), remove that button from the game and give them a new random animal
      numCorrect++;
      
      //Remove the animal
      document.querySelector('#animalPen').removeChild(e.target); //e.target is always the thing you click on
      animals.splice(currentAnimal, 1); // remove the correct answer from the board, otherwise the sound might replay the invisible animal.
        
      notifyUser(true);
      // Give new animal sound
      currentAnimal = Math.floor(Math.random() * animals.length);
        
        if (animals.length == 0) {
            thumbsDiv.innerHTML = "<p style='margin-top:15%; text-align:center'>Quiz Completed! Redirecting...</p>"
            window.setTimeout(function() {
                window.location.reload();
            }, 10000);
        }
      
      //console.log(`${animals[currentAnimal].eng}`);
        
      sound.src = `audio/${animals[currentAnimal].chi}.mp3`;
      sound.play();
     
    }else{
      // If it does not match, play the sound again
      notifyUser(false);
      sound.play();
    }
    
    displayOutput();

  }//Handle all quiz stuff
}

const mode = document.getElementById('mode');
mode.innerHTML = "Let's Study!";

function startQuiz(){
  isQuiz = true;
    
  mode.innerHTML = "Good Luck!";
    
  chinCharDiv.style.display = "none";
    
  // Reset the quiz button to change its functionality to stop the quiz
  quizBtn.innerHTML = "Stop Quiz";
  quizBtn.removeEventListener('click', resetBoard);
  quizBtn.addEventListener('click', stopQuiz);
    
  // Show the play again button. It will default to whatever is specified prior in the CSS
  playAgain.style.display = "";
  
  /* Start the quiz! */
    
  // Fill up animals array
  animals = [...animalsBase];
  // Generate a random animal using Math.rand()
  currentAnimal = Math.floor(Math.random() * animals.length);
  // Get the filepath for the sound of the random animal
  sound.src = "audio/" + animals[currentAnimal].chi + ".mp3";
  sound.play();
}

function repeatSound(){
  sound.play();
}

function notifyUser(guess){
  chinCharDiv.style.display = "flex";
  chinCharDiv.style.cssText += "justify-content: center; align-items: center;";
  
  if(guess) {
    chinCharDiv.style.backgroundImage = "none";
    chinCharDiv.innerHTML = "<p>Good Job</p>";
    thumbsDiv.style.backgroundColor = "green";
    bigPicDiv.style.backgroundColor = "green";

  }else{
    chinCharDiv.style.backgroundImage = "none";
    chinCharDiv.innerHTML = "<p>Try again.</p>";
    thumbsDiv.style.backgroundColor = "red";
    bigPicDiv.style.backgroundColor = "red";
  }

}

// Stop the quiz and go back to learning mode

function stopQuiz(){
  isQuiz = false;
    
  chinCharDiv.innerHTML = "";
  mode.innerHTML = "Let's Study!";
  thumbsDiv.style.backgroundColor = "white";
  bigPicDiv.style.backgroundColor = "white";
  
  quizBtn.innerHTML = "Quiz Me!"
  quizBtn.removeEventListener('click', stopQuiz);
  quizBtn.addEventListener('click', resetBoard);
  
  playAgain.style.display = "none";
  resumeGame.style.display = "";

  
  resumeGame.addEventListener('click', resumeQuiz);
  resumeGame.innerHTML = "Resume";
  footer.appendChild(resumeGame);

}


// display output for the quiz

function displayOutput(){
  bigPicDiv.innerHTML = "";

  // Total attempts
  bigPicDiv.innerHTML += "<p>Total Attempts: " + totalAttempts + "</p>";
  
  // Number correct
  bigPicDiv.innerHTML += "<p>Correct Answers: " + numCorrect + "</p>";
  
  // Percent correct
  let percent = (numCorrect / totalAttempts).toFixed(1) * 100;
  percent = percent >= 0 ? percent : 0; // If there is a percentage, have the percent greater than or equal to 0, otherwise, equal it to 0.
  
  bigPicDiv.innerHTML += "<p>Percent right: " + percent + "%</p>";
}
/*
    On game reset:
      Clear all remaining buttons
      Rebuild animals array
      Rebuild the buttons using rebuilt animals array
      Reset score info
*/

function resetBoard(){
  // Clear buttons
  animalPen.innerHTML = "";
  //console.log('in resetBoard');
  // Rebuild buttons
  // Remove the footer
  document.querySelector('#container').removeChild(footer);
  footer.innerHTML = "";
  initializeImages();
  
  // Reset score info
  totalAttempts = 0;
  numCorrect = 0;
  displayOutput();
  
  startQuiz();
}

/*
  Add a resume button:
    add button to stopQuiz
  
    Display the output - Without clearing results
    Play the sound again
    Set isQuiz to true
    Rebuild Play sound again and stopQuiz
*/

function resumeQuiz(){
  displayOutput();
    
  chinCharDiv.style.display = "none";
    
  mode.innerHTML = "Good Luck!";
  
  sound.src = "audio/" + animals[currentAnimal].chi + ".mp3";
  sound.play();
  
  isQuiz = true;
  
  quizBtn.innerHTML = "Stop quiz";
  quizBtn.removeEventListener('click', resetBoard);
  quizBtn.addEventListener('click', stopQuiz);
  
  playAgain.style.display = "";
  resumeGame.style.display = "none";
  
  
}










