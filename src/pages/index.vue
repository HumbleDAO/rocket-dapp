<template>
  <div>
    <main>
      <header>
        <pre class="flex justify-center moon">
                                *      .--.
                                      / /  `
                    +                | |
                            '         \ \__,
                        *          +   '--'  *
        </pre>
        <div class="title">
          <h1>Rocket Protocol</h1>
        </div>
        <pre class="flex justify-center rocket">
                   +   /\
    +                .'  '.   *
            *       /======\      +
                   ;:.  _   ;
                   |:. (_)  |
                   |:.  _   |
        +          |:. (_)  |          *
                   ;:.      ;
                 .' \:.    / `.
                / .-'':._.'`-. \
                |/    /||\    \|
            </pre
        >
        <pre class="flex justify-center ground">
              _..--"""````"""--.._
        _.-'``                    ``'-._
      -'                                '-
        </pre>
      </header>
      <div class="title">
        <p class="text-white">
          A decentralized protocol for Scheduling Token Transfers on the
          blockchain.
        </p>
        <p class="text-white">Get Started</p>
        <p class="text-white flex justify-center"><liquid-button /></p>
      </div>
      <create-transaction />
      <total-scheduled-transactions />
      <pending-transactions />
      <events />
    </main>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import TotalScheduledTransactions from '../components/TotalScheduledTransactions.vue'
export default {
  name: 'App',
  components: { TotalScheduledTransactions },
  computed: {
    ...mapState(['selectedAccount', 'chainId']),
  },
  async mounted() {
    if (!this.selectedAccount && this.$web3Modal.cachedProvider) {
      this.setLoadingStatus(true)
      await this.$store.dispatch('connectToWallet')
      this.setLoadingStatus(false)
    }
  },
  methods: {
    ...mapMutations(['setLoadingStatus']),
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;600&display=swap');

main {
  display: grid;
  place-items: center;
  min-height: 100vh;
  background-color: #2e303b;
  color: rgb(255, 234, 175);
  font-family: 'Roboto Mono', monospace;
  padding: 3em 0;
}
.moon {
  position: relative;
  color: #ffffff;
}
.moon,
.rocket,
.ground {
  background-color: #2e303b;
  font-size: 0.75em;
}
.ground {
  color: rgb(252, 126, 126);
}
.rocket {
  color: rgb(255, 82, 82);
  line-height: 1.4em;
}
.title {
  display: grid;
  text-align: center;
}
.title > h1 {
  font-size: 2.5em;
  color: #ffffff;
}
p > span {
  color: rgb(252, 126, 126);
  font-weight: 600;
}
</style>
