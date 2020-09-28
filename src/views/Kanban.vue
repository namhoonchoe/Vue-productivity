<template>
  <transition name="slide-fade">
    <div class="kanban">
      <pageheader />
      <KanbanBoard />
    </div>
  </transition>
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
