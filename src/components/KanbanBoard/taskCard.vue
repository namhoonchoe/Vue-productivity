<template>
  <div>
    <p>{{this.title}}</p>
    <button class="edit icon" @click="toggleEdit">
      <i class="material-icons">edit</i>
    </button>
    <button class="delete icon" @click="removeTodo">
      <i class="material-icons">delete</i>
    </button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {
    show: {
      type: Object,
    },
  },

  data() {
    return {
      isEdit: false,
      title: this.show.title,
      id: this.show.id,
    };
  },
  computed: {
    ...mapState("Tasks", ["tasks"]),
    getId() {
      const tasks = this.tasks;
      const [target] = tasks.filter((task) => task.id === this.id);
      const search = tasks.findIndex((i) => i.id === target.id);
      return search;
    },
  },
  methods: {
    ...mapActions("Tasks", ["removeTask", "editTask"]),
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    removeTodo() {
      this.removeTask(this.getId);
    },
  },
};
</script>

<style>
</style>