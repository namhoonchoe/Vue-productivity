<template>
    <div class="board">
        <p class="board-title" >
           title
        </p>
        <ul>
        </ul>
        <boardFilter/>
        <addTask/>
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

    props:['boardState'],

    data() {
       return {
           
       }
    },
    methods:{
      
    },

    computed:{
        
    },

    
    
  }

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