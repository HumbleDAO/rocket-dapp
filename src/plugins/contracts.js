import {
  abi as ROCKET_FACTORY_ABI,
  networks as ROCKET_FACTORY_NETWORK,
} from '../../build/contracts/RocketFactory.json'

let _contracts
export default function (
  { $web3, $web3Socket, $config: { ROCKET_FACTORY_CONTRACT } },
  inject
) {
  _contracts = _setupContracts($web3, $web3Socket, {
    ROCKET_FACTORY_CONTRACT,
  })
  inject('contracts', _contracts)
}

export const contracts = _contracts

function _setupContracts(
  $web3,
  $web3Socket,
  { ROCKET_FACTORY_CONTRACT, NETWORK_ID }
) {
  NETWORK_ID = String(NETWORK_ID)
  console.log('NETWORK_ID: ', NETWORK_ID)
  const rocketFactoryAddress = ROCKET_FACTORY_NETWORK[NETWORK_ID]
    ? ROCKET_FACTORY_NETWORK[NETWORK_ID].address
    : ROCKET_FACTORY_CONTRACT

  // Instantiate https providers
  const RocketFactory = rocketFactoryAddress
    ? new $web3.eth.Contract(ROCKET_FACTORY_ABI, rocketFactoryAddress)
    : null

  // Instantiate wss providers
  const RocketFactorySocket = rocketFactoryAddress
    ? new $web3Socket.eth.Contract(ROCKET_FACTORY_ABI, rocketFactoryAddress)
    : null

  console.log({
    RocketFactory,
    RocketFactorySocket,
  })

  return {
    RocketFactory,
    RocketFactorySocket,
  }
}
