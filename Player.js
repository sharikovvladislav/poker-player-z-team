class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    // current_buy_in - players[in_action][bet] + minimum_raise
    console.log(gameState);

    bet(0);
  }

  static showdown(gameState) {}
}

module.exports = Player;
