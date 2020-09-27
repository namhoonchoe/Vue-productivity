<template>
  <div class="kanban">
    <pageheader />
    <KanbanBoard />
  </div>
</template>

<script>
import pageheader from "../components/PageHeader.vue";
import KanbanBoard from "../components/KanbanBoard";

export default {
  components: {
    pageheader,
    KanbanBoard,
  },
};
</script>

<style scoped>
.kanban {
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: #3182ce;
  background-position: center;
  width: 100vw;
  height: 100%;
}
</style>
