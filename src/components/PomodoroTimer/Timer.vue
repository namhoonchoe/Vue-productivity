<template>
  <div class="timerContainer">{{displayTime}}</div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState("pomodoroTimer", ["time", "startTimer", "status"]),
    ...mapGetters("pomodoroTimer", ["displayTime"]),
  },
};
</script>

<style>
</style>