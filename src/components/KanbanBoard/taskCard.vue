<template>
  <div>
    <div class="task" v-show="!isEdit">
      <p>{{ this.title }}</p>
      <span class="material-icons" @click="rollback">keyboard_arrow_left</span>
      <button class="edit icon" @click="toggleEdit">
        <i class="material-icons">edit</i>
      </button>
      <button class="delete icon" @click="removeHandler">
        <i class="material-icons">delete</i>
      </button>
      <span class="material-icons" @click="proceed">keyboard_arrow_right</span>
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
    task: {
      type: Object,
    },
  },

  data() {
    return {
      isEdit: false,
      title: this.task.title,
      id: this.task.id,
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
    ...mapActions("Tasks", ["removeTask", "editTask", "changeStatus"]),
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
    proceed() {
      if (this.task.statusIndex === 3) {
        return alert("can't change status");
      } else {
        this.task.statusIndex++;
      }
    },
    rollback() {
      if (this.task.statusIndex === 1) {
        return alert("can't change status");
      } else {
        this.task.statusIndex--;
      }
    },
  },
  beforeDestroy() {
    const payload = {
      index: this.getIndex,
      statusIndex: this.task.statusIndex,
    };
    this.changeStatus(payload);
  },
};
</script>

<style></style>
