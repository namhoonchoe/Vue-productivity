import { Task,defaultState,saveStorage } from './defaultState.js';
import Vue from 'vue'

const plugins = [saveStorage]

const state = {
    tasks:defaultState,
    filterType:"total"
}

const getters = {
    tasks(state) {
        switch (state.filterType){
          case "completed":
            return state.tasks.filter(task => task.completed);
          case "inProgress":
            return state.tasks.filter(task => task.inProgress);
          default:
            return state.tasks;
        } 
    },

    countTotal(state) {
        return state.tasks.length;
    },

    countInprogress(state) {
        return state.tasks.filter(task => task.inProgress).length;
    },

    countCompleted(state) {
        return state.tasks.filter(task => task.completed).length;
    }
}

const mutations = {
    SET_CHANGE_TASK(state,payload) {
      const { index, ...rest } = payload;
      
      const task = {
        ...state.tasks[index],
        ...rest
      };

      Vue.set(state.tasks, index, task);
    },

    REMOVE_TASK(state, index) {
      Vue.delete(state.tasks, index);
    },

    ADD_TASK(state,title) {
      const task = new Task({title});
      state.tasks.push(task);
    },

    SET_FILTER(state,type) {
      state.filterType = type;
    }
}

const actions = {
  setChangeTask({ commit }, payload) {
    commit("SET_CHANGE_TASK", payload);
  },

  addTask({ commit }, title) {
    commit("ADD_TASK", title);
  },

  removeTask({ commit }, index) {
    commit("REMOVE_TASK", index);
  },

  changeFilter({ commit }, type) {
    commit("SET_FILTER", type)

  }


}

export default {
    namespaced:true,
    plugins,
    state,
    getters,
    mutations,
    actions 
}