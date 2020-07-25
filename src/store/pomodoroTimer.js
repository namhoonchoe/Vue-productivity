
const state = {
    status:'work',
    time: {
        work:1500,
        rest:300
    },
    timer:null,
    startTimer:false,
   }
const getters = {
    displayTime(state) {
        let min = Math.floor(state.time[state.status]/60);
        let sec = state.time[state.status] % 60;
        return  `${min  < 10 ? 0:''}${min}:${sec < 10 ? 0:''}${sec}`;
    }
   }
const mutations = {
    updateStatus(state, payload) {
        state.status = payload;
    },
    
    timeHandler(state) {
        state.startTimer = !state.startTimer;
    },

    setTimer(state) {
        state.timer = setInterval( () => state.time[state.status]--,1000);
    },

    stopTimer(state) {
        clearInterval(state.timer);
    },

    resetTime(state) {
        state.startTimer = false;
        state.time.work = 1500;
        state.time.rest = 300;
    },    
   }


export default {
    namespaced:true,
    state,
    getters,
    mutations
}