<template>
  <div>
    <header class="header">
      <Navigation class="header__column" />
      <clockContainer class="header__column" />
    </header>
  </div>
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
  align-items: center;
  width: 100%;
  background-color: #2b6cb0;
  padding: 0.25rem;
}

.header__column {
  display: flex;
  justify-content: center;
  padding: 0.25rem;
  color: white;
}
</style>