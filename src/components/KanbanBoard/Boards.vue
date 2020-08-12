<template>
    <div class="boards">
        <section class="Todo">
           <taskList :boardState = Todo
                     :boardTitle = boardTitle[0] />
        </section>
        <section class="inProgress">
           <taskList :boardState = inProgress 
                     :boardTitle = boardTitle[1] />
        </section>
        <section class="Completed">
           <taskList  :boardState = Completed 
                      :boardTitle = boardTitle[2] />
       </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import taskList from './taskList.vue';

export default {
    components: {
        taskList
    },
    data(){
        return {
            boardTitle:["Todo","inProgress","Completed"]
        }
    },
    computed:{
        ...mapGetters('Tasks',[
            'Todo',
            'inProgress',
            'Completed'
        ])
    }
}
</script>

<style scoped>
    .boards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin: 10px 20px;
        gap: 20px;
    }

    

</style>