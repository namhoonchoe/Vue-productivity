import {Todo,defaultState,saveStorage} from './defaultState.js';
import Vue from 'vue'

const plugins = [saveStorage]

const state = {
    todos:defaultState,
    
}

const getters = {
    todos(state) {
        switch (state.filterType){
          case "completed":
            return state.todos.filter(todo => todo.completed);
          case "inProgress":
            return state.todos.filter(todo => todo.inProgress);
          default:
            return state.todos;
        } 
    },

    countTotal(state) {
        return state.todos.length;
    },
    
    countInprogress(state) {
        return state.todos.filter(todo => todo.inProgress).length;
    },
    
    countCompleted(state) {
        return state.todos.filter(todo => todo.completed).length;
    }
}

const mutations = {
    SET_CHANGE_TODO(state,payload) {
      const { index, ...rest } = payload;
      
      const todo = {
        ...state.todos[index],
        ...rest
      };

      Vue.set(state.todos, index, todo);
    },

    REMOVE_TODO(state, index) {
      Vue.delete(state.todos, index);
    },

    ADD_TODO(state,title) {
      const todo = new Todo({title});
      state.todos.push(todo);
    },

    SET_FILTER(state,type) {
      state.filterType = type;
    }
}

const actions = {
  setChangeTodo({ commit }, payload) {
    commit("SET_CHANGE_TODO", payload);
  },

  addTodo({ commit }, title) {
    commit("ADD_TODO", title);
  },

  removeTodo({ commit }, index) {
    commit("REMOVE_TODO", index);
  },

  changeFilter({commit}, type) {
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