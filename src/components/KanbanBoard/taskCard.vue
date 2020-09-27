<template>
  <div class="task">
    <div class="task__card" v-show="!isEdit">
      <div class="task__card--move">
        <span class="material-icons" @click="rollback"
          >keyboard_arrow_left</span
        >
      </div>
      <p class="task__card--item">{{ this.title }}</p>
      <div class="task__card--icons">
        <button class="edit icon" @click="toggleEdit">
          <i class="material-icons">edit</i>
        </button>
        <button class="delete icon" @click="removeHandler">
          <i class="material-icons">delete</i>
        </button>
      </div>
      <div class="task__card--move">
        <span class="material-icons" @click="proceed"
          >keyboard_arrow_right</span
        >
      </div>
    </div>
    <form class="task__form" v-show="isEdit" @submit.prevent="editHandler">
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

<style scoped>
.task {
  background-color: #fff;
}
.task__card {
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  padding: 0.25rem 0;
  margin: 0.1rem;
}

.task__card--item {
  position: relative;
  left: 0px;
  font-size: 1.5rem;
  font-weight: 500;
  margin-right: auto;
}

.task__card--icons i {
  opacity: 0.1;
}

.task__card--icons i:hover {
  opacity: 1;
}

.task__card--icons button {
  background: 0 0;
  border: none;
  border-radius: 2px;
}

.task__form {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1.5rem;
}
.task__form input {
  font-size: 1rem;
  border: 0.1rem solid;
  border-radius: 3px;
  border-color: #cbd5e0;
}
.task__form button {
  background: 0 0;
  border: none;
  opacity: 0.75;
  border-radius: 2px;
}
</style>
