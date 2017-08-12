const getHandPower = require('./get-hand-power');
const makeDecission = require('./decission');

class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    try {
      console.log(JSON.stringify(gameState));

      var myBet;

      if (gameState.community_cards.length > 0) {
        myBet = makeDecission(gameState);
      } else {
        myBet =
          gameState.current_buy_in -
          gameState.players[gameState.in_action].bet
      }

      console.log('my bet:', myBet);
      bet(myBet);
    } catch (e) {
      //дублируем код из try{}
      console.log(JSON.stringify(gameState));
      var myBet =
        gameState.current_buy_in -
        gameState.players[gameState.in_action].bet;

      console.log('my bet:', myBet);
      bet(myBet);
      console.log('exception', e);
      // bet(0);
    }
  }

  static showdown(gameState) {
    try {
      console.log('showdown', JSON.stringify(gameState));
    } catch (e) {
      console.log('showdown exception', e);
    }
  }
}

module.exports = Player;


      // console.log('gameState.current_buy_in', gameState.current_buy_in);
      // console.log('gameState.in_action', gameState.in_action);
      // console.log('gameState.bet', gameState.bet);
      // console.log('gameState.minimum_raise', gameState.minimum_raise);
      // console.log('gameState.players', gameState.players);
