/*
  Film genre voting app Object array conversion:
  
  For each of these steps be sure to change as little as possible at a time. When you rewrite all of the functions don't do it all at once, change the action one first then test it, and move on after you ensure that it is working properly.
  Step 1:
    Convert your actionVotes, animationVotes . . . sportsVotes to be an object array where the first key is the genre, and the second is how many votes it has.
    For example:
    var genres = [
      {genre: "action", votes: 0},
      {genre: "animation", votes: 0},
      . . .
      {genre: "sports", votes:0}
    ];
    
    Update the rest of your functions to work with this new array. actionVotes will become genres[0].votes, and so on.
    
    */
var totVotes = 0;
var totVotesOutput = document.getElementById('total-votes'); 
// arr = ["action", "animation", "biography"]
//let myIndex;
//let genre = "animation"
// for(let i = 0; i < arr.length; i++){
//   if(arr[i] == genre)
//     myIndex = i;
//}
let genres = [
    {genre: 'action', votes: 0},
    {genre: 'animation', votes: 0},
    {genre: 'biography', votes: 0},
    {genre: 'comedy', votes: 0},
    {genre: 'drama', votes: 0},
    {genre: 'family', votes: 0},
    {genre: 'horror', votes: 0},
    {genre: 'musical', votes: 0},
    {genre: 'mystery', votes: 0},
    {genre: 'romance', votes: 0},
    {genre: 'scifi', votes: 0},
    {genre: 'sports', votes: 0},
];

let actionBar = document.getElementById('action-bar'),
    animationBar = document.getElementById('animation-bar'),
    biographyBar = document.getElementById('biography-bar'),
    comedyBar = document.getElementById('comedy-bar'),
    dramaBar = document.getElementById('drama-bar'),
    familyBar = document.getElementById('family-bar'),
    horrorBar = document.getElementById('horror-bar'),
    musicalBar = document.getElementById('musical-bar'),
    mysteryBar = document.getElementById('mystery-bar'),
    romanceBar = document.getElementById('romance-bar'),
    scifiBar = document.getElementById('scifi-bar'),
    sportsBar = document.getElementById('sports-bar');

  /*  
  Step 2:
    Convert your individual functions(actionVote(), animationVote() etc) to work with a singular voting function that handles all of the buttons. Use the code already written in your individual functions to build up your logVote() function. You can choose to either use the event.target.id of the button that called the function or pass in a parameter with the genre. Use this example to start:
      function logVote(genre){
        totalVotes++;
        if(genre == "action"){
          genres[0].votes++;
          actionBar.style.width = genres[0].votes * 5 + "px";
      updateAllPcts();
          
        }else if(genre == 'animation'){ . . .}
        . . .
      } */

function logVote(genre) {
    if(genre == 'action') {
        // <div id="0"
        genres[0].votes++;
        actionBar.style.width = genres[0].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'animation') {
        genres[1].votes++;
        animationBar.style.width = genres[1].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'biography') {
        genres[2].votes++;
        biographyBar.style.width = genres[2].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'comedy') {
        genres[3].votes++;
        comedyBar.style.width = genres[3].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'drama') {
        genres[4].votes++;
        dramaBar.style.width = genres[4].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'family') {
        genres[5].votes++;
        familyBar.style.width = genres[5].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'horror') {
        genres[6].votes++;
        horrorBar.style.width = genres[6].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'musical') {
        genres[7].votes++;
        musicalBar.style.width = genres[7].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'mystery') {
        genres[8].votes++;
        mysteryBar.style.width = genres[8].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'romance') {
        genres[9].votes++;
        romanceBar.style.width = genres[9].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'scifi') {
        genres[10].votes++;
        scifiBar.style.width = genres[10].votes * 5 + 'px';
        updateAllPcts();
    } else if(genre == 'sports') {
        genres[11].votes++;
        sportsBar.style.width = genres[11].votes * 5 + 'px';
        updateAllPcts();
    }
}

function updateAllPcts(){
      totVotes++;
      totVotesOutput.innerHTML = "" + totVotes;
      
      actionOutput.innerHTML = `${actionVotes}  &nbsp; &nbsp; ${(actionVotes/totVotes * 100).toFixed(2)}%`;
      
      animationOutput.innerHTML = animationVotes + " &nbsp; &nbsp; " + (animationVotes/totVotes * 100).toFixed(2) + "%";
      
      biographyOutput.innerHTML = biographyVotes + " &nbsp; &nbsp; " + (biographyVotes/totVotes * 100).toFixed(2) + "%";
      
      comedyOutput.innerHTML = comedyVotes + " &nbsp; &nbsp; " + (comedyVotes/totVotes * 100).toFixed(2) + "%";
      
      dramaOutput.innerHTML = dramaVotes + " &nbsp; &nbsp; " + (dramaVotes/totVotes * 100).toFixed(2) + "%";
      
      familyOutput.innerHTML = familyVotes + " &nbsp; &nbsp; " + (familyVotes/totVotes * 100).toFixed(2) + "%";
      
      horrorOutput.innerHTML = horrorVotes + " &nbsp; &nbsp; " + (horrorVotes/totVotes * 100).toFixed(2) + "%";
      
      musicalOutput.innerHTML = musicalVotes + " &nbsp; &nbsp; " + (musicalVotes/totVotes * 100).toFixed(2) + "%";
      
      mysteryOutput.innerHTML = mysteryVotes + " &nbsp; &nbsp; " + (mysteryVotes/totVotes * 100).toFixed(2) + "%";
      
      romanceOutput.innerHTML = romanceVotes + " &nbsp; &nbsp; " + (romanceVotes/totVotes * 100).toFixed(2) + "%";
      
      scifiOutput.innerHTML = scifiVotes + " &nbsp; &nbsp; " + (scifiVotes/totVotes * 100).toFixed(2) + "%";
      
      sportsOutput.innerHTML = sportsVotes + " &nbsp; &nbsp; " + (sportsVotes/totVotes * 100).toFixed(2) + "%";
      
    }
  
/*
  Step 3:
    Convert your buttons to dynamically created elements. Use the following steps as a guide:
      
      1: Create the element(div)
      2: Give it an ID equal to the index the genre it is tied to has in the array(action button having an ID of 0, animation of 1, and so on).
      3: Give it a className of genre-btn(class is a reserved word in javascript so that's why it is className)
      4: Add an eventListener that calls the function logVote2. This function is provided below.
      5: Append it to the page(wrapper div).
*/ 

for(let i = 0; i < genres.length; i++){
    // newDiv = <div id="action, animation, etc...." value="1, 2, 3, 4 ...." class="genre-btn"></div>
    let newDiv = document.createElement('div');
    newDiv.id = genres[i].genre;
    newDiv.value = i;
    newDiv.className = 'genre-btn';
    newDiv.addEventListener('click', logVote2);
    wrapper.appendChild(newDiv);
    //newDiv.id = genres[i].genre;
}
           
function logVote2() {
    
    // replace genre parameter with the value of clicked div using event.target
    var genreIndex = event.target.value; // JS only reads numbers
    
   /* console.log(genreIndex)
    //Loop through the array, set the index equal to the item that matches your id
    for(let i = 0; i < genres.length; i++){
        if(genres[i].genre == genreIndex){
            genreIndex = i;
        }
    }*/
    
    // increment total vote count
    totVotes++;
    totVotesOutput.innerHTML = ` ${totVotes}`;

    // get the array index of this genre.
    // increment the total votes for this genre.
    genres[genreIndex].votes++;
    // genreIndex = 1, 2, 3....
    
    // increase the size of the progress bar of this genre.
    var genreBar = document.getElementById(genres[genreIndex].genre + "-bar");
    genreBar.style.width = genres[genreIndex].votes * 4 + "px";
    
    // update all genres, since each vote changes the percent of all genres.
    refreshAllOutput();

}

	function refreshAllOutput() {
		var outputElement, outputString, percentOfVotes;
		for (let i = 0; i < genres.length; i++) {
			outputElement = document.getElementById(genres[i].genre + "-votes");
			percentOfVotes = (genres[i].votes / totVotes * 100).toFixed(2);
			outputString = `${genres[i].votes} &nbsp; &nbsp; ${percentOfVotes}%`;
			outputElement.innerHTML = outputString;
		}
	}