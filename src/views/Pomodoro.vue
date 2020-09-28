<template>
  <div class="pomodoro">
    <pageheader />
    <section>
      <div class="timer">
        <Timer />
      </div>
      <div class="inProgress">
        <taskList :boardState="inProgress" :title="boardTitle" />
      </div>
    </section>
  </div>
</template>

<script>
import pageheader from "../components/PageHeader.vue";
import taskList from "../components/KanbanBoard/taskList.vue";
import Timer from "../components/PomodoroTimer/Timer.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    pageheader,
    Timer,
    taskList,
  },
  data() {
    return {
      boardTitle: "In Progress",
    };
  },
  computed: {
    ...mapGetters("Tasks", ["inProgress"]),
  },
};
</script>

<style scoped>
.pomodoro {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #3182ce;
  background-position: center;
  width: 100vw;
  height: 100%;
}

section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 5rem 2.5rem;
  gap: 10rem;
}
.timer {
  margin-left: 10rem;
}
</style>
