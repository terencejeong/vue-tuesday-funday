
export default {
  namespaced: true,
  state: {
    users: []
  },
  getters: {
    usersInStore (state, _ , rootState) {
      return state.users.length > 0
    }
  },
  actions: {
    getAllUsers (context) {
      setTimeout(() => {
        const users = [
          {name: 'guy1vuex', lastName: 'buddy1', email: 'guy1@mail.com'},
          {name: 'guy2vuex', lastName: 'buddy2', email: 'guy2@mail.com'}
        ];
        context.commit('setUsers', users)
      }, 3000)
    },
    createUser(context, formData) {
      context.commit('addUser', formData)
    }
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
    },
    addUser(state, payload) {
      state.users.push(payload)
    }
  }
}
