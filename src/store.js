import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      portfolioPageActive: false,
      visitorName: "",
    };
  },
  mutations: {
    portfolioPageShow(state) {
      state.portfolioPageActive = true;
    },
    getVisitorName(state, name) {
      state.visitorName = name;
    },
  },
});
