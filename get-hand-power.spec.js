const getHandPower = require('./get-hand-power');
const utils = require('./utils');
const constants = require('./constants');

describe('', () => {
  it('to be defined', () => {
    expect(getHandPower).toBeDefined();
  });

  describe('pairs', () => {
    it('low pair', () => {
      expect(getHandPower(utils.humanToLeanPoker(['3C', '3D', '4D']))).toEqual(
        constants.strengthCoeffiecients.pair + 1
      );
    });
    it('high pair', () => {
      expect(getHandPower(utils.humanToLeanPoker(['3C', 'KD', '5C', 'KD', '4D']))).toEqual(
        constants.strengthCoeffiecients.pair + 11
      );
    });
  });
});
