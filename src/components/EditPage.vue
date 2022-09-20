<template>
   <q-page class="column items-center justify-center">
    <div class="q-pa-md" style="max-width: 400px">
      <q-form  class="q-gutter-md">
      <q-input  filled type="text" v-model="Currency.Id" label="Id"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
      <q-input filled type="text" v-model="Currency.country" label="Country Name"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
      <q-input filled type="text" v-model="Currency.country_short_cut" label="Country Short Cut"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
      <q-input filled type="text" v-model="Currency.country_code" label="Country Code"  lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']" />
     <center>
       <div >
        <q-btn label="Submit" type="button" v-on:click="editcurrency" color="green"/>
      </div>
    </center>
    </q-form>
  </div>
</q-page>
</template>
<script>
import axios from 'axios'

export default {

  name: "EditPage",

  data() {

    return {

           Currency:{

                 Id:"",

                 country: "",

                 country_short_cut: "",

                 country_code: "",

                 

            },

            };

  },

  methods: {

     async editcurrency()

    {

      console.warn(this.Currency);

      const data= await axios.put("http://localhost:3000/Currency/"

      + this.$route.params.id,

      {
        Id:this.Currency.Id,

        country:this.Currency.country,

        country_short_cut:this.Currency.country_short_cut,
        country_code:this.Currency.country_code,

         

      });

      if(data.status==200)

      {

        this.$router.push({name:'home'});

      }

      console.warn("data",data);

  },

 },



async mounted() {

    const result = await axios.get(

      "http://localhost:3000/Currency/" + this.$route.params.id

    );

    console.warn(result.data);

    this.Currency = result.data;

}

}




</script>