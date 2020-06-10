class MemoryGame {
  constructor(cards){
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    let i = this.cards.length;
    let k = null;
    let temp = null;
    while(--i > 0){
      k = Math.floor(Math.random() * (i+1));
      temp = this.cards[k];
      this.cards[k] = this.cards[i];
      this.cards[i] = temp;
    }
  }
  

  //should return true or false - boolean
  //should add 1 to pairsClicked - always
  //should add 1 to paisGuessed 
  checkIfPair(card1, card2) {
    const isMatch = card1 === card2;
    if(isMatch){
      this.pairsGuessed += 1;   
      this.pickedCards.push(card1);
    }
    this.pairsClicked += 1;
    return isMatch;
  }

  //should if guessed pairs are iqual of number of pairs
  isFinished() {
    return this.pairsGuessed === (this.cards.length)/2;

  }
}