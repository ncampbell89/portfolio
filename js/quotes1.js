var quotes = [
	'"Whatever the mind of man can conceive and believe, it can achieve." - Napoleon Hill',
	'"Life is about making an impact, not making an income." - Kevin Kruse',
	'"Strive not to be a success, but rather to be of value." - Albert Einstein',
	'"You miss 100% of the shots you don’t take." - Wayne Gretzky',
	'"Every strike brings me closer to the next home run." - Babe Ruth'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (message.length));
    container.innerHTML = message[randomNumber];
}