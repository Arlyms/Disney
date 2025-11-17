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
    hideProtectedPage(state) {
      state.isProtectedPageVisible = false;
    },
    updateEnteredPassword(state, password) {
      state.enteredPassword = password;
    }    
  },
  actions: {
    verifyPassword1({ commit, state }) {
      if (state.enteredPassword === '3') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
        // Gérer le cas où le mot de passe est incorrect
      } 
    },
    verifyPassword2({ commit, state }) {
      if (state.enteredPassword === '2') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
        // Gérer le cas où le mot de passe est incorrect
      } 
    },
    verifyPassword3({ commit, state }) {
      if (state.enteredPassword === '7') {
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