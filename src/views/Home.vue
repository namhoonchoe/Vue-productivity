<template>
    <div>
        <body>
            Home Screen
            <UserName/>
            <Clock/>
        </body>
        <section class="navigation"> 
          <Navigation/>
        </section>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import UserName from '../components/UserName.vue'
import Clock from '../components/Clock.vue'


export default {
  name: 'App',
  components: {
    Navigation,
    UserName,
    Clock
  }
}
</script>

<style scoped>
  
</style>