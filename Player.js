class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    try {
      console.log(gameState);

      console.log('gameState.current_buy_in', gameState.current_buy_in);
      console.log('gameState.in_action', gameState.in_action);
      console.log('gameState.bet', gameState.bet);
      console.log('gameState.minimum_raise', gameState.minimum_raise);
      console.log('gameState.players', gameState.players);

      var myBet =
        gameState.current_buy_in -
        gameState.players[gameState.in_action].bet +
        gameState.minimum_raise +
        1;

      console.log('my bet:', myBet);
      bet(myBet);
    } catch (e) {
      console.log('exception', e);
      bet(0);
    }
  }

  static showdown(gameState) {}
}

module.exports = Player;
