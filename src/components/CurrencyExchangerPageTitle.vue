<template>
  <div>
    <h5>{{CurrencyTitle}}</h5>
  </div>
</template>

<script>
export default {
    name : 'CurrencyExchangerPAgeTitle',
    setup(){
       let CurrencyTitle = "Currency Exchange Page"
       return {
        CurrencyTitle
       }
    }
}
</script>

<style>

</style>