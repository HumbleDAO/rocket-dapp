import {
  abi as MIGRATIONS_ABI,
  networks as MIGRATIONS_NETWORK,
} from '~/../../../truffle/build/contracts/Migrations.json'

let _contracts
export default function (
  { $web3, $web3Socket, $config: { MIGRATIONS_CONTRACT } },
  inject
) {
  _contracts = _setupContracts($web3, $web3Socket, {
    MIGRATIONS_CONTRACT,
  })
  inject('contracts', _contracts)
}

export const contracts = _contracts

function _setupContracts(
  $web3,
  $web3Socket,
  { MIGRATIONS_CONTRACT, NETWORK_ID }
) {
  NETWORK_ID = String(NETWORK_ID)
  console.log('NETWORK_ID: ', NETWORK_ID)
  const migrationsContractAddress = MIGRATIONS_NETWORK[NETWORK_ID]
    ? MIGRATIONS_NETWORK[NETWORK_ID].address
    : MIGRATIONS_CONTRACT

  // Instantiate https providers
  const Migrations = migrationsContractAddress
    ? new $web3.eth.Contract(MIGRATIONS_ABI, migrationsContractAddress)
    : null

  // Instantiate wss providers
  const MigrationsSocket = migrationsContractAddress
    ? new $web3Socket.eth.Contract(MIGRATIONS_ABI, migrationsContractAddress)
    : null

  console.log({
    Migrations,
    MigrationsSocket,
  })

  return {
    Migrations,
    MigrationsSocket,
  }
}
