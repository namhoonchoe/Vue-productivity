<template>
  <div class="board">
    <p class="board-title">{{ title }}</p>
    <taskCard v-for="task in boardState" :key="task.id" :task="task" class="taskcard" />
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
  display: block;
  border: 2px green solid;
  border-radius: 5px;
  padding: 5px;
}
.add-task {
  display: flex;
  justify-content: center;
  padding-bottom: 5px;
}
.taskcard {
  display: flex;
  justify-content: center;
  border-radius: 3px;
  margin: 5px;
  border: 0.5px black solid;
}
</style>
