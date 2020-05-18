const cards = document.querySelectorAll(".memory-card");


function flipCard(){
    this.classList.toggle("flip");
}
//we are looping through the cards and adding an eventlistner
//that event listner is looking for a click event 
//whenever a card is clicked flipCard will be called
cards.forEach(card => card.addEventListener("click",flipCard));