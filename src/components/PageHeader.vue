<template>
  <div>
    <header class="header">
      <section class="header__column">
        <Navigation/>
      </section>
      <section class="header__column">
        <UserName/>        
        <Clock/>
      </section>
  </header>
  </div>
</template>

<script>
import Navigation from './Navigation.vue'
import UserName from './UserName.vue'
import Clock from './Clock.vue'

export default {
    components:{
        Navigation,
        UserName,
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