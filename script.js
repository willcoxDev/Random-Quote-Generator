function changeText() {
    var funnyQuote = randomQuote();
    actQuote = splitQuote(funnyQuote);
    document.getElementById("quote").innerHTML = '"' + actQuote[0] + '"';
    document.getElementById("name").innerHTML = actQuote[1];
}

function splitQuote(quote) {
    return quote.split(" ~")

}

function randomQuote() {
    var quoteList = ["When I die, I want to go peacefully like my grandfather did–in his sleep. Not yelling and screaming like the passengers in his car. ~BOB MONKHOUSE", "I have six locks on my door all in a row. When I go out, I lock every other one. I figure no matter how long somebody stands there picking the locks, they are always locking three. ~ ELAYNE BOOSLER", "Always borrow money from a pessimist. He won’t expect it back. ~OSCAR WILDE"];
    var x = (Math.floor(Math.random() * quoteList.length));
    return quoteList[x];


}
