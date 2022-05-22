<template>
  <h1 class="mt-10">Total Transactions Scheduled: {{ totalTransactions }}</h1>
</template>
<script>
export default {
  data() {
    return {
      totalTransactions: 0,
    }
  },
  async mounted() {
    console.log(this.$contracts.RocketFactory)

    this.totalTransactions = await this.$contracts.RocketFactory.methods
      .getAllTransactionsLength()
      .call()
  },
}
</script>
