<template>
  <div class="home__screen">
    <div
      class="cover"
      :style="{
        backgroundImage: `url(${require(`../assets/image/cover${this.randNum}.jpg`)})`,
      }"
    ></div>
    <section class="home__screen--content">
      <clockContainer class="clock" />
      <div class="nav">
        <router-link to="/Kanban">
          <p class="nav__title">Kanban</p>
        </router-link>
        <router-link to="/Pomodoro">
          <p class="nav__title">Pomodoro</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import clockContainer from "../components/clockContainer.vue";

export default {
  name: "App",
  components: {
    clockContainer,
  },
  data() {
    return {
      randNum: Number,
    };
  },
  methods: {
    genRandom() {
      const imgNum = 4;
      this.randNum = Math.floor(Math.random() * imgNum) + 1;
    },
  },
  created() {
    this.genRandom();
  },
};
</script>

<style>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  z-index: -1;
}

.home__screen {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.home__screen--content {
  position: relative;
  top: 10rem;
  left: auto;
}

.clock {
  color: white;
  font-size: 4rem;
  font-weight: 600;
  padding: 0.25rem;
}
.nav {
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
}

.nav__title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 0.25rem;
}

.nav__title:hover {
  border-bottom: 2px solid;
  border-bottom-color: white;
}
</style>
