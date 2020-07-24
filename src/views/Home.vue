<template>
    <div>
        <body>
            Home Screen
            <Weather/>
            <Clock/>
        </body>
        <section class="navigation"> 
          <Navigation/>
        </section>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Clock from '../components/Clock.vue'
import Weather from '../components/Weather.vue'

export default {
  name: 'App',
  components: {
    Navigation,
    Weather,
    Clock
  }
}
</script>

<style scoped>
  
</style>