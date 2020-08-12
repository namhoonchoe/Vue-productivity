import Vue from 'vue';
import Vuex from 'vuex';
import pomodoroTimer from './pomodoroTimer.js';
import Tasks from './Tasks.js';

Vue.use(Vuex);

export default  new Vuex.Store({
    modules:{ pomodoroTimer,
              Tasks }
});
