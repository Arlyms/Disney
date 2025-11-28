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
      if (state.enteredPassword === 'Orgue' || state.enteredPassword === 'orgue' || state.enteredPassword === 'ORGUE' || state.enteredPassword === 'un orgue' || state.enteredPassword === 'Un orgue' || state.enteredPassword === 'UN ORGUE' || state.enteredPassword === 'Un Orgue') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword6({ commit, state }) {
      if (state.enteredPassword === 'chat' || state.enteredPassword === 'Chat' || state.enteredPassword === 'CHAT' || state.enteredPassword === 'un chat' || state.enteredPassword === 'Un chat' || state.enteredPassword === 'UN CHAT' || state.enteredPassword === 'Un Chat') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword7({ commit, state }) {
      if (state.enteredPassword === '2005' || state.enteredPassword === '205') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword8({ commit, state }) {
      if (state.enteredPassword === 'OUT of THIS WORLDS !' || state.enteredPassword === 'OUT OF THIS WORLDS !' || state.enteredPassword === 'OUT of THIS WORLDS' || state.enteredPassword === 'OUT OF THIS WORLDS' || state.enteredPassword === 'Out of this worlds' || state.enteredPassword === 'OUT of THIS WORLD !' || state.enteredPassword === 'OUT OF THIS WORLD !' || state.enteredPassword === 'out of this world !' || state.enteredPassword === 'OUT of THIS WORLD' || state.enteredPassword === 'OUT OF THIS WORLD' || state.enteredPassword === 'Out of this world' || state.enteredPassword === 'out of this world') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    },
    verifyPassword9({ commit, state }) {
      if (state.enteredPassword === '7') {
        commit('showProtectedPage');
      } else {
        console.log("n° de la boite")
      } 
    }                               
  },    
  modules: {
  }
})