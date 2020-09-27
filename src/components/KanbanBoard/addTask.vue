<template>
  <form class="add__task" @submit.prevent="addTask">
    <span class="material-icons">
      library_add
    </span>
    <input
      class="task__input"
      type="text"
      v-model="title"
      required
      placeholder="Add Your task"
    />
  </form>
</template>

<script>
export default {
  props: {
    statusIndex: Number,
  },

  data() {
    return {
      title: "",
    };
  },
  methods: {
    addTask(event) {
      this.$store.dispatch("Tasks/addTask", {
        title: this.title,
        statusIndex: this.statusIndex,
      });
      event.currentTarget.reset();
    },
  },
};
</script>

<style scoped>
.add__task {
  display: flex;
  align-items: stretch;
  margin-right: 0.25rem;
}
.task__input {
  background-color: #e2e8f0;
  border: none;
}
</style>
