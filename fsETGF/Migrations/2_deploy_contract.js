const ETGFinance = artifacts.require("ETGFinance");
const fsETGF = artifacts.require("fsETGF");

module.exports = function (deployer) {
    deployer.deploy(ETGFinance);
    deployer.deploy(fsETGF);
};
