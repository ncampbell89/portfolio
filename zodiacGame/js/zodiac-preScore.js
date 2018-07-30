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
// End quiz mode variables

let isQuiz = false; // default is teach/learn mode, not quiz mode

const bigPic = new Image();

const bigPicDiv = document.getElementById('bigPicDiv');
const thumbsDiv = document.getElementById('thumbsDiv');
const animalPen = document.getElementById('animalPen');
const chinCharDiv = document.getElementById('chinChar');

/* Quiz mode elements */
const footer = document.createElement('footer');
const quizBtn = document.createElement('button');
const playAgain = document.createElement('button');

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
    quizBtn.addEventListener('click', startQuiz);
    
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
    sound.src = `audio/${animalsBase[e.target.id].eng}.mp3`; // Get the sound that belongs to the animal clicked on
    sound.play(); // Play the mp3

    bigPic.src = `img/chinese-zodiac/${animalsBase[e.target.id].eng}.jpg`; // Replace the big image
    bigPicDiv.innerHTML = "";
    bigPicDiv.appendChild(bigPic);
    // Display the English name under the animal
    bigPicDiv.innerHTML += animalsBase[e.target.id].eng;
    // Display the Pinyin
    bigPicDiv.innerHTML += " - " + animalsBase[e.target.id].pin;

    chinCharDiv.style.backgroundImage = `url(img/chinese-zodiac/char-${animalsBase[e.target.id].chi}.jpg)`;
    chinCharDiv.style.backgroundRepeat = "no-repeat";
    chinCharDiv.style.backgroundPosition = "center";
    chinCharDiv.style.backgroundSize = "contain";
    chinCharDiv.style.backgroundColor = "#FFF";
    chinCharDiv.style.display = "block";
  }else{
    console.log('In quiz mode eval');
    // Look at the animal that was clicked
    if(e.target.eng === animals[currentAnimal].eng){
      // If it matches our random animal(currentAnimal), remove that button from the game and give them a new random animal
      
      //Remove the animal
      document.querySelector('#animalPen').removeChild(e.target);
      animals.splice(currentAnimal, 1);

      // Give new animal sound
      currentAnimal = Math.floor(Math.random() * animals.length);
      sound.src = "audio/" + animals[currentAnimal].chi + ".mp3";
      sound.play();
      
    }else{
      // If it does not match, play the sound again
      sound.play();
    }

  }//Handle all quiz stuff
}





/*
  Quiz mode:
    Triggered by clicking a "Quiz Me" button. This button will turn into a "Quit" button after the quiz begins.
    We use a boolean to tell us which mode we're in.
    
    Add a button to hear the chinese sound again, in case they don't want to waste a guess to hear it.
    
    The functionality will change; instead of clicking to hear a sound, we will hear a sound to guide our clicking. The sound played will only be the chinese word, instead of both the english and chinese.
    
    Quiz will work by generating a random number between 0 and the number of animals left on the page. To do this, we will need to copy our original array and use the new array as an array we can modify so we keep our original list intact.
    
    If the user guesses correctly, we remove the animal from the page. If they guess wrong, we do nothing to begin with.
    

*/

function startQuiz(){
  isQuiz = true;
  // Reset the quiz button to change its functionality to stop the quiz
  quizBtn.innerHTML = "Stop Quiz";
  quizBtn.removeEventListener('click', startQuiz);
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

function stopQuiz(){
  isQuiz = false;
  
  quizBtn.innerHTML = "Quiz Me!"
  quizBtn.removeEventListener('click', stopQuiz);
  quizBtn.addEventListener('click', startQuiz);
  
  playAgain.style.display = "none";

}


function repeatSound(){
  sound.play();
}
/*
  Todo:
    On guess:
      Notify user whether they're right/wrong
      Increment number of guesses
      Output score:
        Replace bigpicdiv contents with score info
          - Total clicks
          - Number correct
          - Percent Correct
          
    On game reset:
      Clear all remaining buttons
      Rebuild animals array
      Rebuild the buttons using rebuilt animals array
      Reset score info



*/