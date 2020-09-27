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
  display: flex;
  padding: 0 0.25rem;
}

.nav__item {
  padding: 0.25rem;
  color: white;
}

.router-link-exact-active {
  border-bottom: 2px;
  border-style: solid;
  border-bottom-color: white;
}
</style>