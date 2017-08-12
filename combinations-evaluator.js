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

module.exports = {
  getPairStrength
};
