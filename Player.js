class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    // current_buy_in - players[in_action][bet] + minimum_raise
    console.log(gameState);
    var myBet =
      gameState.current_buy_in -
      gameState.players[gameState.in_action][gameState.bet] +
      gameState.minimum_raise +
      1;
    console.log('my bet:', myBet);
    bet(myBet);
  }

  static showdown(gameState) {}
}

module.exports = Player;
