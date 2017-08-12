const Player = require('./Player');

describe('player test', () => {
  it('player smoke', () => {
    var spyObject = {
      callback: function() {}
    };
    spyOn(spyObject, 'callback');
    expect(
      Player.betRequest(
        {
          tournament_id: '598e25d6b0cdd800040018da',
          game_id: '598ebd37831444000400003d',
          round: 0,
          players: [
            {
              name: 'Maverik',
              stack: 0,
              status: 'active',
              bet: 1000,
              time_used: 8887,
              version: 'Maverik',
              id: 0
            },
            {
              name: 'Z team',
              stack: 1000,
              status: 'active',
              bet: 0,
              hole_cards: [
                {
                  rank: '6',
                  suit: 'clubs'
                },
                {
                  rank: '7',
                  suit: 'diamods'
                }
              ],
              time_used: 0,
              version: '0.1',
              id: 1
            },
            {
              name: 'Excited Bird',
              stack: 998,
              status: 'active',
              bet: 2,
              time_used: 0,
              version: 'Default Java folding player',
              id: 2
            },
            {
              name: 'Wise Kaa 2',
              stack: 996,
              status: 'active',
              bet: 4,
              time_used: 0,
              version: 'Default Python folding player',
              id: 3
            }
          ],
          small_blind: 2,
          big_blind: 4,
          orbits: 0,
          dealer: 1,
          community_cards: [],
          current_buy_in: 1000,
          pot: 1006,
          in_action: 1,
          minimum_raise: 996,
          bet_index: 3
        },
        spyObject.callback
      )
    );

    expect(spyObject.callback).toHaveBeenCalled();
  });
  it('player good cards', () => {
    var spyObject = {
      callback: function() {}
    };
    spyOn(spyObject, 'callback');
    expect(
      Player.betRequest(
        {
          tournament_id: '598e25d6b0cdd800040018da',
          game_id: '598ebd37831444000400003d',
          round: 0,
          players: [
            {
              name: 'Maverik',
              stack: 0,
              status: 'active',
              bet: 1000,
              time_used: 8887,
              version: 'Maverik',
              id: 0
            },
            {
              name: 'Z team',
              stack: 1000,
              status: 'active',
              bet: 0,
              hole_cards: [
                {
                  rank: '6',
                  suit: 'clubs'
                },
                {
                  rank: '7',
                  suit: 'diamonds'
                }
              ],
              time_used: 0,
              version: '0.1',
              id: 1
            },
            {
              name: 'Excited Bird',
              stack: 998,
              status: 'active',
              bet: 2,
              time_used: 0,
              version: 'Default Java folding player',
              id: 2
            },
            {
              name: 'Wise Kaa 2',
              stack: 996,
              status: 'active',
              bet: 4,
              time_used: 0,
              version: 'Default Python folding player',
              id: 3
            }
          ],
          small_blind: 2,
          big_blind: 4,
          orbits: 0,
          dealer: 1,
          community_cards: [
            {
              rank: '8',
              suit: 'diamonds'
            },
            {
              rank: '9',
              suit: 'spades'
            },
            {
              rank: '10',
              suit: 'diamonds'
            }
          ],
          current_buy_in: 1000,
          pot: 1006,
          in_action: 1,
          minimum_raise: 996,
          bet_index: 3
        },
        spyObject.callback
      )
    );

    expect(spyObject.callback).toHaveBeenCalled();
  });
  it('player bad cards', () => {
    var spyObject = {
      callback: function() {}
    };
    spyOn(spyObject, 'callback');
    expect(
      Player.betRequest(
        {
          tournament_id: '598e25d6b0cdd800040018da',
          game_id: '598ebd37831444000400003d',
          round: 0,
          players: [
            {
              name: 'Maverik',
              stack: 0,
              status: 'active',
              bet: 1000,
              time_used: 8887,
              version: 'Maverik',
              id: 0
            },
            {
              name: 'Z team',
              stack: 1000,
              status: 'active',
              bet: 0,
              hole_cards: [
                {
                  rank: '2',
                  suit: 'clubs'
                },
                {
                  rank: '5',
                  suit: 'diamonds'
                }
              ],
              time_used: 0,
              version: '0.1',
              id: 1
            },
            {
              name: 'Excited Bird',
              stack: 998,
              status: 'active',
              bet: 2,
              time_used: 0,
              version: 'Default Java folding player',
              id: 2
            },
            {
              name: 'Wise Kaa 2',
              stack: 996,
              status: 'active',
              bet: 4,
              time_used: 0,
              version: 'Default Python folding player',
              id: 3
            }
          ],
          small_blind: 2,
          big_blind: 4,
          orbits: 0,
          dealer: 1,
          community_cards: [
            {
              rank: '8',
              suit: 'diamonds'
            },
            {
              rank: 'K',
              suit: 'spades'
            },
            {
              rank: '10',
              suit: 'hearts'
            }
          ],
          current_buy_in: 1000,
          pot: 1006,
          in_action: 1,
          minimum_raise: 996,
          bet_index: 3
        },
        spyObject.callback
      )
    );

    expect(spyObject.callback).toHaveBeenCalled();
  });
});
