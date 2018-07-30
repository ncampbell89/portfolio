//function renderHTML(arr) {
//    var output = "";
//    
//    for (var i = 0; i < arr.length; i++) {
//        output += `"${arr[i].quote}" -${arr[i].author}`;
//    } 
//
//    var randomNumber = Math.floor(Math.random() * (arr.length));
//    document.getElementById('quoteDisplay').innerHTML = arr[randomNumber];
//      
//    container.insertAdjacentHTML('beforeend', output);
//};

const xhr = new XMLHttpRequest();
let sentences = [];

xhr.onreadystatechange = function() {
    if(this.status == 200 && this.readyState == 4) {
        sentences.push(this.responseText);
        JSON.parse(sentences);
        console.log(sentences);
        displayQuotes();
    }
}

xhr.open('GET', 'js/quotes.json', true);
xhr.send();    


function displayQuotes() {
    for(let i = 0; i < sentences.length; i++) {
        let output = document.getElementById('quoteDisplay');
        output.innerHTML = `${sentences[i].quote} -${sentences[i].author}`;
    }
}

