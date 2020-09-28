<template>
  <div class="nav">
    <router-link to="/" exact>
      <span class="nav__item">Home</span>
    </router-link>
    <router-link to="Kanban" exact>
      <span class="nav__item">Kanban</span>
    </router-link>
    <router-link to="Pomodoro" exact>
      <span class="nav__item">Pomodoro</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  position: relative;
  top: 0;
  margin: 0;
}
.nav__item {
  color: white;
  padding: 0.5rem;
}

.router-link-exact-active {
  font-weight: 600;
}
</style>