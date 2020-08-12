<template>
    <div class="board">
        <p class="board-title" >
           {{boardTitle}}
        </p>
        <ul>
        </ul>
        <boardFilter/>
       <form class="add-task" @submit.prevent="addTask">
          <span class="material-icons">
            add_circle_outline
          </span>
          <input type="text" 
                 v-model="title" required
                 placeholder="Add Your task">             
       </form>
    </div>
</template>

<script>
import boardFilter from './boardFilter.vue';

export default {
    components: {
        boardFilter,
    },

    props:['boardState','boardTitle'],

    data() {
        return {
            title:"",
            status:this.boardState[0].status 
        };
    },
    methods:{
       addTask(event) {
        this.$store.dispatch('Tasks/addTask', {
            title:this.title,
            status:this.status
        });
        event.currentTarget.reset();
    }
    },

    
};

</script>

<style scoped>
    .board {
        display:block;
        border: 2px green solid;
        border-radius: 5px;
        padding:5px;
    }
    .add-task {
        display:flex;
        justify-content: center;
        padding-bottom: 5px;
    }
</style>