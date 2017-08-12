const utils = require('./utils');

describe('utils', () => {
  it('', () => {
    expect(
      utils.leanPokerToPokerEval([{ rank: '10', suit: 'clubs' }])
    ).toEqual(['Tc']);
  });

  describe('isBetDone', () => {
    it('1', () => {
      expect(
        utils.isBetDone({
          in_action: 0,
          players: [
            {
              bet: 0
            }
          ]
        })
      ).toEqual(false);
    });
    it('2', () => {
      expect(
        utils.isBetDone({
          in_action: 0,
          players: [
            {
              bet: 1
            }
          ]
        })
      ).toEqual(true);
    });
  });
});
