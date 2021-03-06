require('dotenv').config()
const path = require('path')
const HDWalletProvider = require('@truffle/hdwallet-provider')

module.exports = {
  networks: {
    development: {
      host: process.env.ETH_DEV_RPC_HOST || '127.0.0.1', // Localhost (default: none)
      port: process.env.ETH_DEV_RPC_PORT || 7545, // Standard Ethereum port (default: none)
      network_id: process.env.ETH_DEV_RPC_NETWORK_ID || 5777, // Any network (default: none)
      gas: parseInt(process.env.ETH_DEV_RPC_GAS, 10) || 6721975, // required for deploy, otherwise it throws weird require-errors on constructor
    },
    'development-wsl': {
      host: process.env.ETH_DEV_RPC_HOST || '172.21.32.1', // Localhost (default: none)
      port: process.env.ETH_DEV_RPC_PORT || 7545, // Standard Ethereum port (default: none)
      network_id: process.env.ETH_DEV_RPC_NETWORK_ID || 5777, // Any network (default: none)
      gas: parseInt(process.env.ETH_DEV_RPC_GAS, 10) || 6721975, // required for deploy, otherwise it throws weird require-errors on constructor
    },
    matictestnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.MATIC_WALLET_MNEMONIC,
          'https://matic-mumbai.chainstacklabs.com'
        ),
      network_id: 80001,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 10000000, // 8000000,
    },
    maticmainnet: {
      provider: () =>
        new HDWalletProvider(
          process.env.MATIC_WALLET_MNEMONIC,
          'https://polygon-rpc.com/'
        ),
      network_id: 137,
      confirmations: 1,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 10000000, // 8000000,
      gasPrice: 32000000000,
    },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },
  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: '^0.8.14', // Fetch exact version from solc-bin (default: truffle's version)
      // docker: false,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {
        // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200,
        },
        // evmVersion: "byzantium"
      },
    },
  },
  plugins: [
    'truffle-plugin-verify',
    'truffle-contract-size',
    'truffle-flatten',
  ],
  api_keys: {
    polygonscan: process.env.POLYGONSCAN_API_KEY,
  },
  // subscribers: {
  //   abisToTs: require('./truffle-subscriber-abis-to-ts.js')
  // }
}
