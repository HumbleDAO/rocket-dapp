<template>
  <div>
    <b-loading
      class=""
      :is-full-page="true"
      :active="isLoading"
      :can-cancel="true"
    />
    <section class="pb-4 main-content">
      <navbar />
      <nuxt />
    </section>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
      ],
    }
  },
  computed: {
    ...mapState(['selectedAccount', 'chainId', 'isLoading']),
  },
  mounted() {
    if (
      this.$route.query.ref &&
      this.$web3.utils.isAddress(this.$route.query.ref)
    ) {
      console.log('REF on mount', this.$route.query.ref)
      this.$store.commit('account/SET_ACCOUNT', { ref: this.$route.query.ref })
      localStorage.setItem('referral', this.$route.query.ref)
    }
    if (this.$web3.utils.isAddress(localStorage.getItem('referral'))) {
      this.$store.commit('account/SET_ACCOUNT', {
        ref: localStorage.getItem('referral'),
      })
    }
  },
  beforeDestroy() {
    if (
      this.$web3.currentProvider &&
      this.$web3.currentProvider.removeAllListeners
    ) {
      this.$web3.currentProvider.removeAllListeners()
    }
  },
  methods: { ...mapMutations(['setLoadingStatus']) },
}
</script>

<style>
.web3modal-modal-lightbox {
  z-index: 1000;
}
</style>
