<template>
<div class="kanban">
  <header>
    <pageheader />
  </header>
  <body>
    <KanbanBoard />
  </body>
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
header {
  position: absolute;
  top: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>