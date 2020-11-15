const ETGFinance = artifacts.require("ETGFinance");
const sETGF = artifacts.require("sETGF");

module.exports = function (deployer) {
    deployer.deploy(ETGFinance);
    deployer.deploy(sETGF);
};
