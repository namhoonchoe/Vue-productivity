<template>
    <div class="boards">
        <section class="Todo">
           <taskList v-bind:boardState = Todo />
        </section>
        <section class="inProgress">
           <taskList v-bind:boardState = inProgress />
        </section>
        <section class="completed">
           <taskList  v-bind:boardState = completed />
       </section>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import taskList from './taskList.vue';

export default {
    components: {
        taskList
    },
    computed:{
        ...mapState('Tasks',[
            'Todo',
            'inProgress',
            'completed'
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