<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar> 
        <q-btn flat router-link to='/' icon="home" />
          <q-toolbar-title>
          <TitleName class="titlename" />
        </q-toolbar-title>
          <div>   
            <q-btn flat  router-link to='/currencyexchanger' class="button" >
            <p id="currencychanger">Currency Exchanger</p>
            </q-btn>
          </div>
      </q-toolbar>
    </q-header>
    <q-page-container>
        <router-view/>
    </q-page-container>
    
  </q-layout>
   
</template>
<script>

import TitleName from "./components/TitleName.vue";
export default {
  components: {
    TitleName
}
}

</script>

<style scoped>
.titlename{
  margin-top:15px;
  font-variant-caps:all-petite-caps;
  font-size: large;
}
#currencychanger{
  margin-top:15px;
  font-size: large;
  font-variant-caps: all-petite-caps;
}
</style>

