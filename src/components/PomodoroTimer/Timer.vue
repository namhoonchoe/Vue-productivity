<template>
  <div class="timerContainer">
    <section v-if="count === false && pause === false">
      <div>{{ displayTime }}</div>
      <p>screen1</p>
      <button @click="startTimer">
        <p>시작</p>
      </button>
    </section>
    <section v-else-if="count === true && pause === false">
      <p>screen2</p>
      <div>{{ displayTime }}</div>
      <button @click="pauseTimer">
        <p>일시정지</p>
      </button>
    </section>
    <section v-else-if="count === false && pause === true">
      <p>screen3</p>
      <div>{{ displayTime }}</div>
      <button @click="startTimer">
        <p>계속</p>
      </button>
      <button @click="resetTimer">
        <p>정지</p>
      </button>
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

<style></style>
