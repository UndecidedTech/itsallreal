import axios from 'axios'
// import router from '../router'

axios.defaults.withCredentials = true

export default {
  namespaced: true,
  state: {
    tweets: [],
    params: {}
  },

  getters: {
    tweets (state) {
      return state.tweets
    }
  },
  mutations: {
    SET_TWEETS (state, tweets) {
      state.tweets = tweets
    },
    SET_STATE (state, newState) {
      state.params.state = newState
    }
  },

  actions: {
    async getTweets ({ commit, state }) {
      console.log(state.params)
      const res = await axios.get('/api/tweets', { params: state.params })
      if (res.status === 200) {
        commit('SET_TWEETS', res.data)
      }
    },
    setState ({ commit }, newState) {
      commit('SET_STATE', newState)
    }
  }
}
