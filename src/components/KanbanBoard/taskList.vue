<template>
    <div class="board">
        <p class="board-title" >
           {{boardTitle}}
        </p>
        <boardFilter/>
        <ul>
        </ul>
        <addTask :boardTitle = taskStatus />
    </div>
</template>

<script>
import boardFilter from './boardFilter.vue';
import addTask from './addTask.vue';

export default {
    components: {
        boardFilter,
        addTask
    },

    props:['boardState','boardTitle'],

    data() {
        return {
           taskStatus:this.boardTitle
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