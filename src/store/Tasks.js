import Vue from 'vue';
import { Task, defaultTask } from './defaultTask.js';


const state = { 
    tasks:defaultTask
}


const getters = {
    Todo(state) {
        return state.tasks.filter(task => task.status === "Todo")
    },

    inProgress(state){
        return state.tasks.filter(task => task.status === "inProgress")
    },

    Completed(state){
        return state.tasks.filter(task => task.status === "Completed")
    },

    countTodo() {
        return state.tasks.filter(task => task.status === "Todo").length;
    },

    countInprogress() {
        return state.tasks.filter(task => task.status === "inProgress").length;
    },

    countCompleted() {
        return state.tasks.filter(task => task.status === "Completed").length;
    }
}
const mutations = {
    ADD_TASK(state, {title , status}) {
      const task = new Task( { title, status } );
      state.tasks.push(task);
    },

    REMOVE_TASK(state, index) {
        Vue.delete(state.todos, index);
    }
}

const actions = {
    addTask( { commit }, {title,status} ) {
        commit( "ADD_TASK", {title, status} );
    },

    removeTask( { commit }, index) {
        commit( "REMOVE_TASK", index );
    }
}
export default {
    namespaced:true,
    getters,
    mutations,
    actions,
    state
}