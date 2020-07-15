<template>
    <div class="boards">
        <section class="todo">
           <TaskBoard/>
        </section>
        <section class="in-progress">
           <TaskBoard/>
        </section>
        <section class="done">
           <TaskBoard/>
       </section>
    </div>
</template>

<script>
import TaskBoard from './TaskBoard.vue'

export default {
    components: {
        TaskBoard
    }
}
</script>

<style scoped>
    .boards {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    

</style>