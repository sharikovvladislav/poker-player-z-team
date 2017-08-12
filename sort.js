const constants = require('./constants');

function sort(cards) {
  const sortedCards = [...cards];

  //console.log('sort sortedCards', sortedCards);

  sortedCards.sort((a, b) => {
    return constants.ranks.indexOf(b.rank) - constants.ranks.indexOf(a.rank);
  });

  return sortedCards;
}

module.exports = sort;
