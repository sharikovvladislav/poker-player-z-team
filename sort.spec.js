const sort = require('./sort');
const utils = require('./utils');

describe('sort', () => {
  it('smoke', () => {
    expect(sort).toBeDefined();
  });

  describe('sort', () => {
    it('1', () => {
      expect(
        utils.leanPokerToHuman(sort(utils.humanToLeanPoker(['3C', '10D'])))
      ).toEqual(['10D', '3C']);
    });
    it('2', () => {
      console.log(
        utils.leanPokerToHuman(utils.humanToLeanPoker(['AC', '5D', 'JH', '5S']))
      );
      expect(
        utils.leanPokerToHuman(
          sort(utils.humanToLeanPoker(['AC', '5D', 'JH', '5S']))
        )
      ).toEqual(['AC', 'JH', '5D', '5S']);
    });
    it('3', () => {
      expect(
        utils.leanPokerToHuman(
          sort(
            utils.humanToLeanPoker([
              'AC',
              'JH',
              '5D',
              '5S',
              'QC',
              'KD',
              '2H',
              '10C'
            ])
          )
        )
      ).toEqual(['AC', 'KD', 'QC', 'JH', '10C', '5D', '5S', '2H']);
    });
    it('3', () => {
      expect(
        utils.leanPokerToHuman(
          sort(
            utils.humanToLeanPoker([
              'AC',
              'JH',
              '5D',
              '9D',
              'JD',
              '2D',
              '5S',
              '8D',
              '6S',
              '3S',
              'QC',
              'KD',
              '2H',
              '4H',
              '10C',
              '7C'
            ])
          )
        )
      ).toEqual([
        'AC',
        'KD',
        'QC',
        'JD',
        'JH',
        '10C',
        '9D',
        '8D',
        '7C',
        '6S',
        '5S',
        '5D',
        '4H',
        '3S',
        '2D',
        '2H'
      ]);
    });
  });
});
