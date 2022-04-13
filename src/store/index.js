import {
  createStore
} from "vuex";

const lang = localStorage.getItem("language");

export default createStore({
  state() {
    return {
      language: lang === null ? "id" : lang,
    };
  },

  getters: {
    getLanguage(state) {
      return state.language;
    },
  },

  mutations: {
    changeLanguage(state, language) {
      state.language = language;
    },
  },
});