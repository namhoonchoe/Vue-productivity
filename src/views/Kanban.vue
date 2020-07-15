<template>
    <div class="kanban">
        <header>
          <pageheader/>
        </header>
        <body>
          <Boards/>
        </body>
    </div>
</template>

<script>
import pageheader from '../components/PageHeader.vue'
import Boards from '../components/KanbanBoard/Boards.vue'

export default {
    components: {
        pageheader,
        Boards
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
</style>