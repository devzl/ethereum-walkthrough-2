const Wrestling = artifacts.require("./Wrestling.sol")

module.exports = function(deployer) {
	deployer.deploy(Wrestling);
};