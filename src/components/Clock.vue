<template>
    <div class="clockContainer">
        {{hours}}:{{minutes}}
    </div>
</template>

<script>
export default {
    data() {
        return {
          hours:'',
          minutes:'',
          seconds:'',
        }
    },
    computed:{
        
    },
    methods:{
        getTime() {
            const date = new Date
            this.hours = date.getHours(),
            this.minutes = date.getMinutes()
        }
    },

    mounted() {
        this.clock = setInterval(this.getTime,1000)
       
    }
}
</script>

<style>

</style>