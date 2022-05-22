<template>
  <h1>Total Scheduled Transactions: {{ totalTransactions }}</h1>
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
