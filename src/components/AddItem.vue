<template>
<div class="q-pa-md">
   <q-page class="column items-center justify-center">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form  class="q-gutter-md">
        <q-input  filled type="text" v-model="Currency.Id" label="Id" lazy-rules :rules ="[val => val && val.length > 0 || 'Enter Country Id']"  maxlength="4" />
        <q-input filled type="text"  v-model="Currency.country" label="Country Name " lazy-rules :rules="[ val => val && val.length > 0 || 'Enter Country Name']" maxlength="10" />
        <q-input filled type="text"  v-model="Currency.country_short_cut" label="Country Short cut" lazy-rules :rules="[ val => val && val.length > 0 || 'Enter Country Short Cut']" maxlength="10" />
        <q-input filled type="text" v-model="Currency.country_code" label="Country Code"  lazy-rules :rules="[ val => val && val.length > 0 || 'Enter the Country ']"  maxlength="10" />
           <center>
           <div >
           <q-btn label="ADD Data" type="button" v-on:click="add" color="green"/>
           </div>
           </center>
      </q-form>
   </div>
  </q-page>
</div>
</template>
<script>
import axios from 'axios'
export default {
  name: "AddItem",
  data() {
    return {
           Currency:{
                 Id:"",
                 country: "",
                 country_short_cut: "",
                 country_code: "",
            }
            }
  },
  methods: {
     async add()
    {
      console.warn(this.Currency);
      const data= await axios.post("http://localhost:3000/Currency",
      {
        Id:this.Currency.Id,
        country:this.Currency.country,
        country_short_cut:this.Currency.country_short_cut,
        country_code:this.Currency.country_code,
      });
      if(data.status==201)
      {
        this.$router.push({name:'home'});
      }
      console.warn("data",data);
  },

 },
}
</script>