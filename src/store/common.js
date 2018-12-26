/* eslint-disable */

const INIT_STATE = {
  token: null,
  username: null,
  slide_bar_height: ''
}

export default {
  namespaced: true,
  state: {
    ...INIT_STATE
  },
  mutations: {
    tokenLoaded: (state, value) => {
      state.token = value
    },
    username: (state, value) => {
      state.username = value
    },
    slide_bar_height: (state, value) => {
      state.slide_bar_height = value
    },
    restore: (state) => {
      const s = INIT_STATE
      Object.keys(s).forEach(key => {
        state[key] = s[key]
      })
    }
  },
  getters: {
    common_data: state => state,
    token: state => state.token,
    username: state => state.username,
    slide_bar_height: state => state.slide_bar_height
  }
}
