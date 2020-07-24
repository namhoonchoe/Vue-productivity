<template>
  <div>
    <header class="header">
      <section class="header__column">
        <Navigation/>
      </section>
      <section class="header__column">
        <Weather/>
        <Clock/>
      </section>
  </header>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Clock from './Clock.vue'
import Weather from './Weather.vue'

export default {
    components:{
        Navigation,
        Weather,
        Clock
    }
}
</script>

<style scoped>
  .header {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px ;     
  }
  
  .header__column {
    display:flex;
    justify-content: center;
  }
  
  
   



</style>