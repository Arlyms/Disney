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
      } 
    },
    verifyPassword2({ commit, state }) {
      if (state.enteredPassword === '630' || state.enteredPassword === '0630') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword3({ commit, state }) {
      if (state.enteredPassword === '6') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword4({ commit, state }) {
      if (state.enteredPassword === '28') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword5({ commit, state }) {
      if (state.enteredPassword === '7') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword6({ commit, state }) {
      if (state.enteredPassword === '8') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword7({ commit, state }) {
      if (state.enteredPassword === '9') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword8({ commit, state }) {
      if (state.enteredPassword === '1') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword9({ commit, state }) {
      if (state.enteredPassword === '2') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    }                               
  },    
  modules: {
  }
})