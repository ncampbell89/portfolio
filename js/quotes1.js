var quotes = [
	'"Whatever the mind of man can conceive and believe, it can achieve." - Napoleon Hill',
	'"Life is about making an impact, not making an income." - Kevin Kruse',
	'"Strive not to be a success, but rather to be of value." - Albert Einstein',
	'"You miss 100% of the shots you don’t take." - Wayne Gretzky',
	'"Every strike brings me closer to the next home run." - Babe Ruth',
	'"Only I can change my life. No one else can do it for me." - Carol Burnett',
	'"Life is 10% what happens to you and 90% how you react to it." - Charles R. Swindoll',
	'"Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence." - Helen Keller',
	'"It doesn\'t matter how slowly you go as long as you don\'t stop." - Confucius',
	'"Failure will never overtake me if my determination to succed is strong enough." - Og Mandino',
	'"With the new day comes new strength and new thoughts." - Eleanor Roosevelt',
	'"The secret of getting ahead is getting started." - Mark Twain',
	'"We should not give up and we should not allow the problem to defeat us." - A.P.J. Abdul Kalam'
]

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
