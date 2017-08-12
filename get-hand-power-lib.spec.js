const getHandPower = require('./get-hand-power-lib');
const utils = require('./utils');

describe('getHandPowerLib', () => {
  it('to be defined', () => {
    expect(getHandPower).toBeDefined();
  });

  it('1', () => {
    expect(
      getHandPower(utils.humanToLeanPoker(['3C', '3H', '3D', '5C', '5H']))
    ).toEqual(28687);
  });
});
