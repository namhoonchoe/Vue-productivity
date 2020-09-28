<template>
  <transition name="slide-fade">
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
  </transition>
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
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
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
