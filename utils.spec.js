const utils = require('./utils');

describe('utils', () => {
  it('', () => {
    expect(utils.leanPokerToPokerEval([{rank: '10', suit: 'clubs'}])).toEqual(['Tc'])
  });
});
