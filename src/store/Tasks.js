import Vue from "vue";
import { Task, defaultTask } from "./defaultTask.js";

const state = {
  tasks: defaultTask,
};

const getters = {
  Todo(state) {
    return state.tasks.filter((task) => task.statusIndex === 1);
  },

  inProgress(state) {
    return state.tasks.filter((task) => task.statusIndex === 2);
  },

  Completed(state) {
    return state.tasks.filter((task) => task.statusIndex === 3);
  },
};
const mutations = {
  ADD_TASK(state, { title, statusIndex }) {
    const task = new Task({ title, statusIndex });
    state.tasks.push(task);
  },
  REMOVE_TASK(state, payload) {
    Vue.delete(state.tasks, payload);
  },

  EDIT_TASK(state, payload) {
    const { index, ...rest } = payload;
    const task = {
      ...state.tasks[index],
      ...rest,
    };
    Vue.set(state.tasks, index, task);
  },
  CHANGE_STATUS(state, payload) {
    const { index, statusId } = payload;
    const task = {
      ...state.tasks[index],
    };
    task.statusId = statusId;
    Vue.set(state.tasks, index, task);
  },
};

const actions = {
  addTask({ commit }, { title, statusIndex }) {
    commit("ADD_TASK", { title, statusIndex });
  },

  removeTask({ commit }, payload) {
    commit("REMOVE_TASK", payload);
  },

  editTask({ commit }, payload) {
    commit("EDIT_TASK", payload);
  },

  changeStatus({ commit }, payload) {
    commit("CHANGE_STATUS", payload);
  },
};
export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
