<template>
  <div>
    <header class="header">
      <section class="header__column">
        <Navigation />
      </section>
      <section class="header__column">
        <clockContainer />
      </section>
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
  padding: 5px 10px;
}

.header__column {
  display: flex;
  justify-content: center;
}
</style>