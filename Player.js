class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    // current_buy_in - players[in_action][bet] + minimum_raise
    var bet =
      gameState.current_buy_in -
      gameState.players[gameState.in_action][gameState.bet];
    bet(bet);
  }

  static showdown(gameState) {}
}

module.exports = Player;
