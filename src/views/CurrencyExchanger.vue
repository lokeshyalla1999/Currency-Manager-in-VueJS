<template>
  <div class="q-pa-md">
     <CurrencyExchangerPageTitle class="PageTitle" />
     <div class="display">
      <marquee><h4 id="baseValue">1 {{ currency_one }} = {{ rate }} {{ currency_two }}</h4></marquee>
     </div>
     <div class="App">
     <div class="container-one">
      <select name="first-currency"  @change="fetchData()"  v-model="currency_one" id="select"> 
          <option value="AED">AED</option>
          <option value="ARS">ARS</option>
          <option value="AUD">AUD</option>
          <option value="BGN">BGN</option>
          <option value="BRL">BRL</option>
          <option value="BSD">BSD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CLP">CLP</option>
          <option value="CNY">CNY</option>
          <option value="COP">COP</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="DOP">DOP</option>
          <option value="EGP">EGP</option>
          <option value="EUR">EUR</option>
          <option value="FJD">FJD</option>
          <option value="GBP">GBP</option>
          <option value="GTQ">GTQ</option>
          <option value="HKD">HKD</option>
          <option value="HRK">HRK</option>
          <option value="HUF">HUF</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="ISK">ISK</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="KZT">KZT</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PAB">PAB</option>
          <option value="PEN">PEN</option>
          <option value="PHP">PHP</option>
          <option value="PKR">PKR</option>
          <option value="PLN">PLN</option>
          <option value="PYG">PYG</option>
          <option value="RON">RON</option>
          <option value="RUB">RUB</option>
          <option value="SAR">SAR</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="TRY">TRY</option>
          <option value="TWD">TWD</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="UYU">UYU</option>
          <option value="VND">VND</option>
          <option value="ZAR">ZAR</option>
          
      </select> 
      <input type="number" name="input-one" id="input-one" v-model="amountone" @input="fetchData()" />
     </div>
     <div class="container-three">
      <select name="secoud-currency" id="select" @change="fetchData()" v-model="currency_two">
          <option value="AED">AED</option>
          <option value="ARS">ARS</option>
          <option value="AUD">AUD</option>
          <option value="BGN">BGN</option>
          <option value="BRL">BRL</option>
          <option value="BSD">BSD</option>
          <option value="CAD">CAD</option>
          <option value="CHF">CHF</option>
          <option value="CLP">CLP</option>
          <option value="CNY">CNY</option>
          <option value="COP">COP</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="DOP">DOP</option>
          <option value="EGP">EGP</option>
          <option value="EUR">EUR</option>
          <option value="FJD">FJD</option>
          <option value="GBP">GBP</option>
          <option value="GTQ">GTQ</option>
          <option value="HKD">HKD</option>
          <option value="HRK">HRK</option>
          <option value="HUF">HUF</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="ISK">ISK</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="KZT">KZT</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PAB">PAB</option>
          <option value="PEN">PEN</option>
          <option value="PHP">PHP</option>
          <option value="PKR">PKR</option>
          <option value="PLN">PLN</option>
          <option value="PYG">PYG</option>
          <option value="RON">RON</option>
          <option value="RUB">RUB</option>
          <option value="SAR">SAR</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="TRY">TRY</option>
          <option value="TWD">TWD</option>
          <option value="UAH">UAH</option>
          <option value="USD">USD</option>
          <option value="UYU">UYU</option>
          <option value="VND">VND</option>
          <option value="ZAR">ZAR</option>
      </select>
      <input type="number" name="amount-one" id="input-one" placeholder="0" disabled  v-model="amounttwo" />
  </div>
  </div>
  <q-footer elevated>
        <q-toolbar>
          <q-toolbar-title class="footer">{{ data.time_last_update_utc }}</q-toolbar-title>
        </q-toolbar>
      </q-footer>
    </div>
</template>
<script>
import CurrencyExchangerPageTitle from "@/components/CurrencyExchangerPageTitle.vue"

export default({
  components:{
    CurrencyExchangerPageTitle
  },
  data(){
    return {
      data:[],
      currency_one :'USD',
      currency_two : 'EUR',
      rate :'',
      amountone:1,
      amounttwo :0,
    }
  },
  methods :{
    fetchData(){
      fetch(`https://v6.exchangerate-api.com/v6/${"9809b1cec3fb53ce2b3f3f6a"}/latest/${
          this.currency_one
        }`).then(res=>res.json())
        .then(data =>{
          this.data = data
          this.rate = data.conversion_rates[this.currency_two]
          this.amounttwo = this.amountone * this.rate.toFixed(6)
        })
    }
  },
  switchValues() {
      const temp = this.currency_one
      this.currency_one = this.currency_two
      this.currency_two = temp
      this.fetchData()
    },
  mounted(){
    this.fetchData();
  }
})
</script>


<style scoped>
.PageTitle{
  text-align: center;
  text-decoration: underline;
}
.display{

  text-align: center;
  height: 100px;
  width: 500px;
  margin-left:400px;
  padding-bottom: 80px;
}
.footer{
  text-align: center;
}

.App{
  border: solid blue 3px;
  text-align: center;
  height: 200px;
  background-color: darkturquoise;
  font-style: normal;
  font-family: Arial, Helvetica, sans-serif;
  width: 500px; 
  margin-left:400px;
  border-radius: 10px;
}
.container-one{
   margin:20px;
   margin-top:30px
}
.container-two{
  margin:20px;
}

#select{
  margin : 10px;
  height: 40px;
  width: 80px;
  border: solid blue 2px;
  border-radius: 5px;
}
input{
  height: 40px;
  border : solid blue 2px;
  border-radius: 5px;
}
</style>