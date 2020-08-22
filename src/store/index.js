import Vue from 'vue';
import Vuex from 'vuex';
import pomodoroTimer from './pomodoroTimer.js';
import Tasks from './Tasks.js';
import { saveStorage } from './defaultTask.js'

Vue.use(Vuex);

export default  new Vuex.Store({
    plugins: [ saveStorage ],
    modules: { pomodoroTimer,
              Tasks }
});
