const getHandPower = require('./get-hand-power-lib');

const genCount = 10000,
      common = require('./constants'),
      utils = require('./utils'),
      allCards = common.ranks.reduce(function (result, val) {
        common.suits.forEach(function(suit) {
          result.push({rank: val, suit: suit})
        });
        return result;
      }, []);

function makeDecission(gameState) {
  var p = getP(gameState), // вероятность выиграша
      win = 2*p*gameState.pot,
      bet_cur = gameState.players[gameState.in_action].bet + gameState.minimum_raise;

  try {
    console.log('win', win)
    console.log('bet_cur', bet_cur)
    console.log('cards', JSON.stringify(utils.leanPokerToHuman(gameState.players[gameState.in_action].hole_cards.concat(gameState.community_cards))));
  } catch (e) {

  }

  if (win < bet_cur) {
    return 0;
  } else if (bet_cur + gameState.small_blind > win && win >= bet_cur) {
    return gameState.current_buy_in;
  } else {
    return gameState.current_buy_in - gameState.players[gameState.in_action].bet + gameState.minimum_raise + 1;
  }
}

function getP(gameState) {
  var wins = 0,
      my = gameState.players[gameState.in_action].hole_cards,
      community = gameState.community_cards||[],
      visible = utils.leanPokerToHuman(my.concat(community)),
      ostatok = utils.humanToLeanPoker(utils.leanPokerToHuman(allCards).filter(function(card) {
        return visible.indexOf(card) === -1;
      }));

  for(var i = 0; i < genCount; i++) {
    if(getRandom(my, community, ostatok, gameState.players.length)) {
      wins++;
    }
  }

  return wins/genCount;
}

function getRandom(my, community, ostatok, playersCount) {
  var rest = ostatok.concat(),
    myHandPower = getHandPower(addRandom(my.concat(community), rest)),
    result = true;

  for (var i = 0; i < playersCount-1 && result; i++) {
    result = myHandPower >= getHandPower(addRandom(community.concat(), rest));
  }

  return result;
}

function addRandom(cards, rest) {
  for (var i = cards.length; i < 7; i++) {
    cards = cards.concat(rest.splice(getRandomInt(0, rest.length-1), 1));
  }
  return cards;
}

// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = makeDecission;
