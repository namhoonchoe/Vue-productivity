class Task {
  constructor({ title = "", statusIndex = Number }) {
    this.title = title;
    this.id = Date.now() + Math.random();
    this.statusIndex = statusIndex;
  }
}

let tasks = window.localStorage.getItem("tasks");

let defaultTask = tasks
  ? JSON.parse(tasks)
  : [
      new Task({ title: "JavaScript", statusIndex: 1 }),
      new Task({ title: "Vue.js", statusIndex: 2 }),
      new Task({ title: "Vuex", statusIndex: 3 }),
    ];

const saveStorage = (store) => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem("tasks", JSON.stringify(state.Tasks.tasks));
  });
};

export { Task, defaultTask, saveStorage };
