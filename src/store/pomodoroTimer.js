const state = {
  count: false,
  pause: false,
  time: 1500,
};

const getters = {
  displayTime(state) {
    let min = Math.floor(state.time / 60);
    let sec = state.time % 60;
    return `${min < 10 ? 0 : ""}${min}:${sec < 10 ? 0 : ""}${sec}`;
  },
};

const mutations = {
  startTimer(state) {
    state.count = true;
    state.pause = false;
    state.timer = setInterval(() => state.time--, 1000);
  },

  pauseTimer(state) {
    state.count = false;
    state.pause = true;
    state.timer = clearInterval(state.timer);
  },

  resetTimer(state) {
    state.count = false;
    state.pause = false;
    state.time = 1500;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
