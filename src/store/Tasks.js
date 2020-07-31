import { defaultTask, saveStorage } from './defaultTask.js';

const plugins = [saveStorage]


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

export default {
    namespaced:true,
    plugins,
    getters,
    state
}