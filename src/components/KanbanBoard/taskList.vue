<template>
  <div class="board">
    <p class="board-title">{{ taskStatus }}</p>
    <draggable group="boardState">
      <taskCard
        v-for="task in boardState"
        :key="task.id"
        :task="task"
        @moved="task.stauts=taskStatus"
      />
    </draggable>
    <addTask :state="taskStatus" />
  </div>
</template>

<script>
import draggable from "vuedraggable";
import taskCard from "./taskCard.vue";
import addTask from "./addTask.vue";

export default {
  components: {
    taskCard,
    addTask,
    draggable,
  },

  props: {
    boardState: {
      type: Array,
    },
    taskStatus: {
      type: String,
    },
  },

  //["boardState", "taskStatus"],
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
</style>
