<template>
  <div>
    <div class="task" v-show="!isEdit">
      <p>{{ this.title }}</p>
      <button class="edit icon" @click="toggleEdit">
        <i class="material-icons">edit</i>
      </button>
      <button class="delete icon" @click="removeHandler">
        <i class="material-icons">delete</i>
      </button>
    </div>
    <form class="task-form" v-show="isEdit" @submit.prevent="editHandler">
      <input type="text" v-model="title" required />
      <button class="icon" type="submit">
        <i class="material-icons">save</i>
      </button>
    </form>
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
    getIndex() {
      const [target] = this.tasks.filter((task) => task.id === this.id);
      const search = this.tasks.findIndex((i) => i.id === target.id);
      return search;
    },
  },
  methods: {
    ...mapActions("Tasks", ["removeTask", "editTask"]),
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
    removeHandler() {
      this.removeTask(this.getIndex);
    },
    editHandler() {
      this.toggleEdit();
      const payload = {
        title: this.title,
        index: this.getIndex,
      };
      this.editTask(payload);
    },
  },
};
</script>

<style></style>
