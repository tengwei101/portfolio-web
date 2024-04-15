const quoteText = document.querySelector(".quotes"),
    authorName = document.querySelector(".author .name"),
    quoteBtn = document.getElementById("quoteB"),

    soundBtn = document.querySelector(".sound"),
    copyBtn = document.querySelector(".copy"),
    twitterBtn = document.querySelector(".twitter");

// random quote Function
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";

    //fetch random quotes/data from the API and parsing it into JavaScript object
    fetch("https://api.quotable.io/random?tags=inspirational").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
    //SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(quoteText.innerText + " by " + authorName.innerText);

    //Check the browser is support synthesis API or not
    if ('speechSynthesis' in window) {
        speechSynthesis.speak(utterance);
    } else {
        alert("Sorry, your browser doesn't support the speech synthesis API !");
    }
});

copyBtn.addEventListener("click", () => {
    //copying the quote Text on copyBtn click
    //writeText() property writes the specified text string to the Notepad
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", () => {
    let tweetUrl = 'https://twitter.com/intent/tweet?url=' + quoteText.innerText + " %23WINKUTAR";
    window.open(tweetUrl, "_blank"); //Open new twitter tab with passing quote in the url
});

quoteBtn.addEventListener("click", randomQuote);