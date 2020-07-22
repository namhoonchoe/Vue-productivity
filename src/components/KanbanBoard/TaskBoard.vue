<template>
    <div class="board">
        <p class="board-title">
            board title
        </p>
        <ul class="task-list">
            <p>tasks</p>
        </ul>
        <div class="add-task">
           <input type="text" placeholder="Add Your task">
           <span class="material-icons">
             add_box
           </span>            
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .board {
        display:block;
        border: 2px green solid;
        border-radius: 5px;
    }

</style>