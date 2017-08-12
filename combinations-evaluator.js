const constants = require('./constants');

function getPairStrength(sortedCards) {
  let counter = 1;
  let lastRank = sortedCards[0].rank;
  let highCard = lastRank;

  for (var i = 1; i < sortedCards.length; i++) {
    const currentRank = sortedCards[i].rank;
    if (lastRank === currentRank) {
      return constants.ranks.indexOf(highCard);
    }

    highCard = currentRank;
    lastRank = currentRank;
  }

  return -1;
}

function getSetStrength(sortedCards) {
  if (sortedCards.length < 3) {
    return -1;
  }

  for (var i = 0; i < sortedCards.length - 2; i++) {
    const currentRank = sortedCards[i].rank;
    const nextRank = sortedCards[i + 1].rank;
    const nextNextRank = sortedCards[i + 2].rank;

    console.log(currentRank, nextRank, nextNextRank);
    if (currentRank === nextRank && currentRank === nextNextRank) {
      return constants.ranks.indexOf(currentRank);
    }
  }

  return -1;
}

function getFourStrength(sortedCards) {
  if (sortedCards.length < 4) {
    return -1;
  }

  for (var i = 0; i < sortedCards.length - 3; i++) {
    const currentRank = sortedCards[i].rank;
    const nextRank = sortedCards[i + 1].rank;
    const nextNextRank = sortedCards[i + 2].rank;
    const nextNextNextRank = sortedCards[i + 3].rank;

    //console.log(currentRank, nextRank, nextNextRank, nextNextNextRank);
    if (
      currentRank === nextRank &&
      currentRank === nextNextRank &&
      currentRank === nextNextNextRank
    ) {
      return constants.ranks.indexOf(currentRank);
    }
  }

  return -1;
}

function getFlushStrength(cards) {
  console.log(cards);
  const cardSuits = cards.map(card => card.suit);

  let cardCountHash = {
    spades: 0,
    diamonds: 0,
    hearts: 0,
    clubs: 0
  };

  console.log(cardSuits);
  cardSuits.forEach(cardSuit => {
    cardCountHash[cardSuit] += 1;
  });

  console.log(cardCountHash);

  if (
    cardCountHash.spades >= 5 ||
    cardCountHash.diamonds >= 5 ||
    cardCountHash.hearts >= 5 ||
    cardCountHash.clubs >= 5
  ) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = {
  getPairStrength,
  getSetStrength,
  getFourStrength,
  getFlushStrength
};
