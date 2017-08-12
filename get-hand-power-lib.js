const utils = require('./utils');
const pokerEvaluator = require('poker-evaluator');

function getHandPowerLib(cards) {
  const pokerEvalFormatCards = utils.leanPokerToPokerEval(cards);
  const handStats = pokerEvaluator.evalHand(pokerEvalFormatCards);

  return handStats.value;
}

module.exports = getHandPowerLib;
