class Task {
    constructor({title = '', status = ''}) {
        this.title = title;
        this.id = Date.now() + Math.random()
        this.status = status;
    }
}

const tasks = window.localStorage.getItem('tasks');

const defaultState = tasks 
    ? JSON.parse(tasks) 
    : [
        new Task({ title: "JavaScript" }),
        new Task({ title: "Vue.js" }),
        new Task({ title: "Vuex" })
    ];

const saveStorage = store => {
    store.subscribe((mutation, state) => {
        window.localStorage.setItem("tasks",JSON.stringify(state.tasks))
    });
};

export {Task,defaultState,saveStorage};