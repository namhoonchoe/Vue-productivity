<template>
  <div class="boards">
    <section class="Todo">
      <taskList :boardState="Todo" :taskStatus="taskStatus[0]" />
    </section>
    <section class="inProgress">
      <taskList :boardState="inProgress" :taskStatus="taskStatus[1]" />
    </section>
    <section class="Completed">
      <taskList :boardState="Completed" :taskStatus="taskStatus[2]" />
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
      taskStatus: ["Todo", "inProgress", "Completed"],
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
  margin: 10px 20px;
  gap: 20px;
}
</style>