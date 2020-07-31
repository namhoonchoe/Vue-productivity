<template>
    <div class="boards">
        <section class="Todo">
           <taskList v-bind:boardState = Todo />
        </section>
        <section class="inProgress">
           <taskList v-bind:boardState = inProgress />
        </section>
        <section class="Completed">
           <taskList  v-bind:boardState = Completed />
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