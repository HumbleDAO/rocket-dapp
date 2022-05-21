import path from 'path'

/* eslint-disable prefer-const */
let { DEPLOYED_NET_ENV, NETWORK_ID, MIGRATIONS_CONTRACT } = process.env

if (DEPLOYED_NET_ENV === 'mainnet') {
  NETWORK_ID = '137'
  MIGRATIONS_CONTRACT = ''
}

if (DEPLOYED_NET_ENV === 'testnet') {
  NETWORK_ID = '80001'
  MIGRATIONS_CONTRACT = ''
}

if (DEPLOYED_NET_ENV === 'local') {
  NETWORK_ID = '5777' // ETH DEV `truffle development`
  MIGRATIONS_CONTRACT = ''
}

const networkData =
  DEPLOYED_NET_ENV === 'mainnet'
    ? [
        {
          // 137
          chainId: '0x89',
          chainName: 'Polygon',
          rpcUrls: ['https://polygon-rpc.com/'],
          socketRpcUrls: ['wss://matic-mainnet-full-ws.bwarelabs.com'],
          nativeCurrency: {
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18,
          },
          blockExplorerUrls: ['https://polygonscan.com/'],
        },
      ]
    : DEPLOYED_NET_ENV === 'testnet'
    ? [
        {
          // 80001
          chainId: '0x13881',
          chainName: 'Matic Mumbai Testnet',
          rpcUrls: ['https://matic-mumbai.chainstacklabs.com/'],
          socketRpcUrls: ['wss://ws-matic-mumbai.chainstacklabs.com'],
          nativeCurrency: {
            name: 'Matic',
            symbol: 'MATIC',
            decimals: 18,
          },
          blockExplorerUrls: ['https://mumbai.polygonscan.com//'],
        },
      ]
    : [
        {
          // 1337
          chainId: '0x539',
          chainName: 'Truffle Development Local Net',
          rpcUrls: ['https://127.0.0.1:9545'],
          nativeCurrency: {
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
          },
        },
      ]

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  srcDir: 'src/',

  rootDir: './',

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rocket Protocol',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  build: {},

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],

  modules: ['@nuxtjs/axios', ['nuxt-buefy', { css: false }]],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  publicRuntimeConfig: {
    networkData,
    NETWORK_ID,
    MIGRATIONS_CONTRACT,
  },

  tailwindcss: {
    cssPath: '~/assets/styles/tailwind.css',
    configPath: './tailwind.config.js',
    exposeConfig: true,
    config: {},
  },
}