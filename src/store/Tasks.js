import Vue from "vue";
import { Task, defaultTask } from "./defaultTask.js";

const state = {
  tasks: defaultTask,
};

const getters = {
  Todo(state) {
    return state.tasks.filter((task) => task.status === "Todo");
  },

  inProgress(state) {
    return state.tasks.filter((task) => task.status === "inProgress");
  },

  Completed(state) {
    return state.tasks.filter((task) => task.status === "Completed");
  },
};
const mutations = {
  ADD_TASK(state, { title, status }) {
    const task = new Task({ title, status });
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
};

const actions = {
  addTask({ commit }, { title, status }) {
    commit("ADD_TASK", { title, status });
  },

  removeTask({ commit }, payload) {
    commit("REMOVE_TASK", payload);
  },

  editTask({ commit }, payload) {
    commit("EDIT_TASK", payload);
  },

  changeStatus({ commit }, payload) {
    commit("CHANGE_TASK", payload);
  },
};
export default {
  namespaced: true,
  getters,
  mutations,
  actions,
  state,
};
