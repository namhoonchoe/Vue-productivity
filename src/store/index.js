import Vue from 'vue'
import Vuex from 'vuex'
import pomodoroTimer from './pomodoroTimer.js'
import Todos from './Todos.js'

Vue.use(Vuex);

export default  new Vuex.Store({
    modules:{ pomodoroTimer,
              Todos }
});
