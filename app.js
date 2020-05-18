const cards = document.querySelectorAll(".memory-card");


let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;

    } else {
        //second click
        hasFlippedCard = false;
        secondCard = this;

        //if cards match
        checkForMatch();
    }
}

function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card 
    
    isMatch ? disbaleCards() : unflipCards();
}

function disbaleCards(){
    //remove the actionlistners
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

function unflipCards(){
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1000);
}
//we are looping through the cards and adding an eventlistner
//that event listner is looking for a click event 
//whenever a card is clicked flipCard will be called
cards.forEach(card => card.addEventListener("click", flipCard));