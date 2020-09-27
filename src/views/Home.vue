<template>
  <div class="home__screen">
    <clockContainer />
    <div class="nav">
      <router-link to="/Kanban">
        <p class="nav__title">Kanban</p>
      </router-link>
      <router-link to="/Pomodoro">
        <p class="nav__title">Pomodoro</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import clockContainer from "../components/clockContainer.vue";

export default {
  name: "App",
  components: {
    clockContainer,
  },
};
</script>

<style >
.home__screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav {
  display: flex;
  justify-content: space-between;
}
.nav__title {
  padding: 0.25rem;
}
</style>