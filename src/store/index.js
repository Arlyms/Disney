import { createStore } from 'vuex'

export default createStore({
  state: {
    isProtectedPageVisible: false,
    enteredPassword: '',
  },
  mutations: {
    showProtectedPage(state) {
      state.isProtectedPageVisible = true;
    },
    updateEnteredPassword(state, password) {
      state.enteredPassword = password;
    }    
  },
  actions: {
    verifyPassword({ commit, state }) {
      if (state.enteredPassword === '3') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
        // Gérer le cas où le mot de passe est incorrect
      } 
    }   
  },    
  modules: {
  }
})