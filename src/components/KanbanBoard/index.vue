<template>
  <div class="boards">
    <section class="Todo">
      <taskList
        :title="boardTitle[0]"
        :boardState="Todo"
        :taskStatus="taskStatus[0]"
        class="taskList"
      />
    </section>
    <section class="inProgress">
      <taskList
        :title="boardTitle[1]"
        :boardState="inProgress"
        :taskStatus="taskStatus[1]"
        class="taskList"
      />
    </section>
    <section class="Completed">
      <taskList
        :title="boardTitle[2]"
        :boardState="Completed"
        :taskStatus="taskStatus[2]"
        class="taskList"
      />
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import taskList from "./taskList.vue";

export default {
  components: {
    taskList,
  },
  data() {
    return {
      taskStatus: [1, 2, 3],
      boardTitle: ["To do", "In Progress", "Completed"],
    };
  },
  computed: {
    ...mapGetters("Tasks", ["Todo", "inProgress", "Completed"]),
  },
};
</script>

<style scoped>
.boards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 5rem;
  gap: 10rem;
}
</style>
