const Migrations = artifacts.require('Migrations')
const RocketFactory = artifacts.require('RocketFactory')

module.exports = function (deployer) {
  deployer.deploy(Migrations)
  deployer.deploy(RocketFactory)
}
