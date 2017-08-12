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
function leanPokerToPokerEval(cardsAsLPCard) {
  return cardsAsLPCard.map(cardAsLPCard => {
    let suitChar;

    switch (cardAsLPCard.suit) {
      case 'spades':
        suitChar = 's';
        break;
      case 'clubs':
        suitChar = 'c';
        break;
      case 'hearts':
        suitChar = 'h';
        break;
      case 'diamonds':
        suitChar = 'd';
        break;
    }

    let cardRank;
    if (cardAsLPCard.rank === '10') {
      cardRank = 'T';
    } else {
      cardRank = cardAsLPCard.rank;
    }

    return cardRank + suitChar + '';
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

function isBetDone(gameState) {
  return gameState.players[gameState.in_action].bet !== 0;
}

function isPreFlop (gameState) {
  return gameState.community_cards.length === 0;
}

module.exports = {
  isBetDone,
  isPreFlop,
  humanToLeanPoker,
  leanPokerToHuman,
  leanPokerToPokerEval
};
