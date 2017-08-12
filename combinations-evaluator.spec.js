const combinationsEval = require('./combinations-evaluator');
const utils = require('./utils');

describe('combinations', () => {
  describe('getPairStrength', () => {
    it('to be defined', () => {
      expect(combinationsEval.getPairStrength).toBeDefined();
    });
    it('1', () => {
      expect(
        combinationsEval.getPairStrength(utils.humanToLeanPoker(['3C', '3H']))
      ).toEqual(1);
    });
    it('2', () => {
      expect(
        combinationsEval.getPairStrength(
          utils.humanToLeanPoker(['4C', '3C', '3H'])
        )
      ).toEqual(1);
    });
    it('3', () => {
      expect(
        combinationsEval.getPairStrength(
          utils.humanToLeanPoker(['KC', 'KH', '3C', '3H'])
        )
      ).toEqual(11);
    });
    it('3', () => {
      expect(
        combinationsEval.getPairStrength(
          utils.humanToLeanPoker(['AC', 'AH', '3C', '3H'])
        )
      ).toEqual(12);
    });
    it('4', () => {
      expect(
        combinationsEval.getPairStrength(
          utils.humanToLeanPoker(['KC', 'QD', '5C', '5H', '3C', '3H'])
        )
      ).toEqual(3);
    });
  });
  describe('getSetStrength', () => {
    it('to be defined', () => {
      expect(combinationsEval.getSetPairStrength).toBeDefined();
    });
    it('1', () => {
      expect(
        combinationsEval.getSetPairStrength(
          utils.humanToLeanPoker(['3C', '3H'])
        )
      ).toEqual(-1);
    });
    it('2', () => {
      expect(
        combinationsEval.getSetPairStrength(
          utils.humanToLeanPoker(['3C', '3C', '3H'])
        )
      ).toEqual(1);
    });
    it('3', () => {
      expect(
        combinationsEval.getSetPairStrength(
          utils.humanToLeanPoker(['KC', 'KH', 'KS', '3C'])
        )
      ).toEqual(11);
    });
    it('4', () => {
      expect(
        combinationsEval.getSetPairStrength(
          utils.humanToLeanPoker(['AC', 'AH', 'AS', '3C', '3H'])
        )
      ).toEqual(12);
    });
    it('5', () => {
      expect(
        combinationsEval.getSetPairStrength(
          utils.humanToLeanPoker(['KC', 'QD', '5C', '5H', '5S', '3C', '3H'])
        )
      ).toEqual(3);
    });
  });
});
