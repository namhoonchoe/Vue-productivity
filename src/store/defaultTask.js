class Task {
    constructor({title = '', status = ''}) {
        this.title = title;
        this.id = Date.now() + Math.random()
        this.status = status;
    }
}

const tasks = window.localStorage.getItem('tasks');

const defaultTask = tasks 
    ? JSON.parse(tasks) 
    : [
        new Task({ title: "JavaScript" , status:"Todo"}),
        new Task({ title: "Vue.js", status:"inProgress"}),
        new Task({ title: "Vuex", status:"Completed" })
    ];

const saveStorage = store => {
    store.subscribe((mutation, state) => {
        window.localStorage.setItem("tasks",JSON.stringify(state.tasks))
    });
};

export {Task,defaultTask,saveStorage};