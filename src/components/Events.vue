<template>
  <h1 class="mt-10">Total Transactions Scheduled: {{ totalTransactions }}</h1>
</template>
<script>
export default {
  mounted() {
    this.$contracts.RocketFactorySocket.events
      .TransferScheduled()
      .on('data', function (event) {
        console.log(`new event - transaction hash: ${event.transactionHash}`)
        console.log(`new event - sender: ${event.returnValues.sender}`)
        console.log(`new event - id: ${event.returnValues.id}`)
        console.log(
          `new event - location: ${web3.utils.hexToUtf8(
            event.returnValues.location
          )}`
        )
      })
      .on('error', function (error, receipt) {
        console.log(`error`, error, receipt)
      })
  },
}
</script>
