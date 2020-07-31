<template>
    <div class="pomodoro">
        <header>
          <pageheader/>
        </header>
        <body>
            <section class="timer">
              <Timer/>
            </section>
            <section class="inProgress">
                <taskList v-bind:boardState = inProgress />
             </section>
        </body>
    </div>
</template>

<script>
import pageheader from '../components/PageHeader.vue'
import taskList from '../components/KanbanBoard/taskList.vue'
import Timer from '../components/PomodoroTimer/Timer.vue'
import { mapGetters } from 'vuex';

export default {
    components: {
        pageheader,
        Timer,
        taskList
    },
    computed: {
        ...mapGetters('Tasks',[
            'inProgress'
        ])
    }
}
</script>

<style scoped>
    header {
      position:absolute;
      top:0;
      justify-content: space-between;
      align-items: center;
      width:100%;
    }
    
    body{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        margin: 10px 20px;
    }

    

</style>