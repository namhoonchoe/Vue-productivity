<template>
  <header class="header">
    <div class="header__column">
      <Navigation />
    </div>
    <clockContainer class="header__column" />
  </header>
</template>

<script>
import Navigation from "./Navigation.vue";
import clockContainer from "./clockContainer.vue";

export default {
  components: {
    Navigation,
    clockContainer,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: #2b6cb0;
}

.header__column {
  color: white;
  font-weight: 500;
  padding: 1rem;
}
</style>