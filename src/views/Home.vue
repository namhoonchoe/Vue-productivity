<template>
<div>
  <body>
    Home Screen
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

export default {
  name: "App",
  components: {
    Navigation,
    clockContainer,
  },
};
</script>

<style scoped>
</style>