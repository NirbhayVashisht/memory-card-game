const cards = document.querySelectorAll(".memory-card");


let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return; //if firstCard is clicked twice

    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    } 
        //second click
        hasFlippedCard = false;
        secondCard = this;

        //if cards match
        checkForMatch(); 
}

function checkForMatch(){
    let isMatch = firstCard.dataset.card === secondCard.dataset.card 
    
    isMatch ? disbaleCards() : unflipCards();
}

function disbaleCards(){
    //remove the actionlistners
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards(){
    //incase it's not a match lock it and only unlock it unless it's not a match
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
        resetBoard();
    }, 1000);
}

function resetBoard(){
    [hasFlippedCard,lockBoard] =  [false,false];
    [firstCard,secondCard] = [null,null];
}

function shuffle(){
    //a function to shuffle up the cards
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random()*12);
        card.style.order = randomPos;
    })    
}


function main(){
    //suffle everytime before running
    shuffle();
    //we are looping through the cards and adding an eventlistner
    //that event listner is looking for a click event 
    //whenever a card is clicked flipCard will be called
    cards.forEach(card => card.addEventListener("click", flipCard));
}

main();

