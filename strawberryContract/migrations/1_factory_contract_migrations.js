const StrawberryCharityFactoryContract = artifacts.require('StrawberryCharityFactory');
const StrawberryColorPaletteFactoryContract = artifacts.require('StrawberryColorPaletteFactory');


module.exports = function (deployer) {
  deployer.deploy(StrawberryCharityFactoryContract);
  deployer.deploy(StrawberryColorPaletteFactoryContract);
};
