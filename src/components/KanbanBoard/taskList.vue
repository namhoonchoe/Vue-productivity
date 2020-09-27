<template>
  <div class="board">
    <p class="board__title">{{ title }}</p>
    <taskCard
      v-for="task in boardState"
      :key="task.id"
      :task="task"
      class="task__card"
    />
    <addTask :statusIndex="taskStatus" />
  </div>
</template>

<script>
import taskCard from "./taskCard.vue";
import addTask from "./addTask.vue";

export default {
  components: {
    taskCard,
    addTask,
  },

  props: {
    boardState: {
      type: Array,
    },
    title: {
      type: String,
    },
    taskStatus: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.board {
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  background-color: #e2e8f0;
  border-radius: 0.25rem;
  padding: 0.5rem;
}

.board__title {
  display: flex;
  justify-content: flex-start;
  font-weight: 600;
  margin: 0.5rem;
}

.task__card {
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-radius: 3px;
  border-bottom: solid;
  border-bottom-color: #cbd5e0;
  margin: 0.1rem;
}
</style>
