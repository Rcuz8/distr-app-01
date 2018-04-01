var Migrations = artifacts.require("./Migrations.sol");
var myAddress = "0xc90743068c0382a500526c8f09adabd8e987e2cb";
var gas = 7089713;
module.exports = function(deployer) {
  deployer.deploy(Migrations, {
    gas: gas,
    from: myAddress
  });
};
