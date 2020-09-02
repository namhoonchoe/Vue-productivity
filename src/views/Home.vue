<template>
<div>
  <body>
    Home Screen
    <Weather />
    <clockContainer />
  </body>
  <section class="navigation">
    <Navigation />
  </section>
</div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import clockContainer from "../components/clockContainer.vue";
import Weather from "../components/Weather.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Weather,
    clockContainer,
  },
};
</script>

<style scoped>
</style>