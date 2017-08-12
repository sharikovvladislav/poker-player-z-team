const combinationsEvaluator = require('./combinations-evaluator');
const sort = require('./sort');
const constants = require('./constants');

function getHandPower (cards) {
  const sortedCards = sort(cards);

  //console.log('sortedCards', sortedCards);

  let result;

  result = combinationsEvaluator.getFourStrength(sortedCards);
  if (result != -1) {
    console.log('kek')
    return constants.strengthCoeffiecients.four + result;
  }

  result = combinationsEvaluator.getSetStrength(sortedCards);
  if (result != -1) {
    return constants.strengthCoeffiecients.set + result;
  }

  result = combinationsEvaluator.getPairStrength(sortedCards);
  if (result != -1) {
    return constants.strengthCoeffiecients.pair + result;
  }

  return -1;

  console.log(sortedCards);
}

module.exports = getHandPower;
