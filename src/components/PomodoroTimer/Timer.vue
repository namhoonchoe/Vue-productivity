<template>
  <div class="timer__container">
    <section>
      <h1 class="timer__title">Pomodoro</h1>
      <div v-if="count === false && pause === false">
        <div class="timer">{{ displayTime }}</div>
        <div class="button__container">
          <button @click="startTimer">
            <p>시작</p>
          </button>
        </div>
      </div>
      <div v-else-if="count === true && pause === false">
        <div class="timer">{{ displayTime }}</div>
        <div class="button__container">
          <button @click="pauseTimer">
            <p>일시정지</p>
          </button>
        </div>
      </div>
      <div v-else-if="count === false && pause === true">
        <div class="timer">{{ displayTime }}</div>
        <div class="button__container">
          <button @click="startTimer">
            <p>계속</p>
          </button>
          <button @click="resetTimer">
            <p>정지</p>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState("pomodoroTimer", ["time", "count", "pause"]),
    ...mapGetters("pomodoroTimer", ["displayTime"]),
  },
  methods: {
    ...mapMutations("pomodoroTimer", [
      "startTimer",
      "pauseTimer",
      "resetTimer",
      "setTimer",
    ]),
    setTimer() {
      switch (this.count) {
        case this.count === true:
          return setInterval(() => this.time--, 1000);
        case this.count === false:
          return this.time;
      }
    },
  },
  mounted() {
    this.setTimer;
  },
};
</script>

<style scoped>
.timer__container {
  max-width: 20rem;
  background-color: #e2e8f0;
  border-radius: 0.25rem;
  padding: 0.5rem;
}

.timer {
  background-color: #fff;
  height: 7rem;
  width: auto;
  font-weight: 700;
  font-size: 3rem;
  margin: 0.5rem;
  padding: 2rem;
}

.timer__title {
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  padding: 0.5rem;
}

.button__container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
  margin: auto;

  border-radius: 2px;
}
.button__container button {
  background: 0 0;
  border: none;
  font-size: 1rem;
  font-weight: 400;
}
</style>
