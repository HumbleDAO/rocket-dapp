const RocketFactory = artifacts.require('RocketFactory')

module.exports = function (deployer) {
  deployer.deploy(RocketFactory)
}
