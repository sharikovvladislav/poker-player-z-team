function leanPokerToHuman(cardsAsLPCard) {
  return cardsAsLPCard.map(cardAsLPCard => {
    let suitChar;

    switch (cardAsLPCard.suit) {
      case 'spades':
        suitChar = 'S';
        break;
      case 'clubs':
        suitChar = 'C';
        break;
      case 'hearts':
        suitChar = 'H';
        break;
      case 'diamonds':
        suitChar = 'D';
        break;
    }
    return cardAsLPCard.rank + suitChar + '';
  });
}

function humanToLeanPoker(cards) {
  return cards.map(card => {
    let suit;
    switch (card[card.length - 1]) {
      case 'C':
        suit = 'clubs';
        break;
      case 'D':
        suit = 'diamonds';
        break;
      case 'H':
        suit = 'hearts';
        break;
      case 'S':
        suit = 'spades';
        break;
    }

    const rankAsString = card.substring(0, card.length - 1);

    return {
      rank: rankAsString,
      suit: suit
    };
  });
}

module.exports = {
  humanToLeanPoker,
  leanPokerToHuman
};
