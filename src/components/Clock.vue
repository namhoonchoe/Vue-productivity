<template>
    <div class="clockContainer">
        {{hours}}:{{minutes}}:{{hoursystem}}
    </div>
</template>

<script>
export default {
    data() {
        return {
          hours:'__',
          minutes:'__',
          hoursystem:'__'
        }
    },
    computed:{
        
    },
    methods:{
        getTime() {
            return {

            }
        }
    }
}
</script>

<style>

</style>