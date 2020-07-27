class Todo {
    constructor({title = '', status = 'todo'}) {
        this.title = title;
        this.id = Date.now() + Math.random()
        this.status = status;
    }
}

const todos = window.localStorage.getItem('todos');

const defaultState = todos ? JSON.parse(todos) : [];

const saveStorage = store => {
    store.subscribe((mutation, state) => {
        window.localStorage.setItem("todos",JSON.stringify)
    });
};

export {Todo,defaultState,saveStorage};