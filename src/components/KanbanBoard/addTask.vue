<template>
  <form class="add-task" @submit.prevent="addTask">
    <span class="material-icons">add_circle_outline</span>
    <input type="text" v-model="title" required placeholder="Add Your task" />
  </form>
</template>

<script>
export default {
  props: ["state"],

  data() {
    return {
      title: "",
      status: this.state,
    };
  },
  methods: {
    addTask(event) {
      this.$store.dispatch("Tasks/addTask", {
        title: this.title,
        status: this.status,
      });
      event.currentTarget.reset();
    },
  },
};
</script>

<style>
</style>