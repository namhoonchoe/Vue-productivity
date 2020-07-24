<template>
    <div class="clockContainer">
      {{hourContainer}}:{{minutesContainer}}:{{hoursystem}}
    </div>
</template>

<script>
export default {
    data() {
      return {
        hours:'',
        minutes:'',
        hoursystem:'',
      }
    },
    computed:{
      hourContainer(){
        return this.hours > 9 ? (this.hours) : (`0${this.hours}`) 
      },
      minutesContainer(){
        return  this.minutes > 9 ? (this.minutes) : (`0${this.minutes}`) 
      }
    },
    methods:{
      getTime() {
          const date = new Date
          this.hours = date.getHours(),
          this.minutes = date.getMinutes()
      }
    },
    watch:{
      hours(now){
        now > 12 ? (this.hoursystem = "PM") : (this.hoursystem = "AM")
      }
    },
    mounted() {
      this.clock = setInterval(this.getTime,1000)
       
    }
}
</script>

<style>

</style>