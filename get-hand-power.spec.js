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
  describe('sets', () => {
    it('low set', () => {
      expect(getHandPower(utils.humanToLeanPoker(['3C', '3D', '3S', '4D']))).toEqual(
        constants.strengthCoeffiecients.set + 1
      );
    });
    it('high set', () => {
      expect(getHandPower(utils.humanToLeanPoker(['3C', 'KD', 'KS', '5C', 'KD', '4D']))).toEqual(
        constants.strengthCoeffiecients.set + 11
      );
    });
  });
  describe('fours', () => {
    it('low fours', () => {
      expect(getHandPower(utils.humanToLeanPoker(['3C', '3D', 'KD', '3S','4D', '3D']))).toEqual(
        constants.strengthCoeffiecients.four + 1
      );
    });
    it('high fours', () => {
      expect(getHandPower(utils.humanToLeanPoker(['3C', 'KD', 'KS', 'KC', 'KD', '4D']))).toEqual(
        constants.strengthCoeffiecients.four + 11
      );
    });
  });
});
