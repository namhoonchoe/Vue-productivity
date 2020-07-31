
class Task {
    constructor({title ='' , status =''}) {
        this.title = title;
        this.status = status;
    }
}

const state = { 
    Todo:[ new Task({title:'',status:'todo'}) ],

    inProgress: [ new Task({title:'',status:'inProgress'}) ],

    completed: [ new Task({title:'',status:'completed'}) ]   
}


export default {
    Task,
    namespaced:true,
    state
}