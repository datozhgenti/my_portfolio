import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      portfolioPageActive: false,
      visitorName: "",
      pageLoaded: false,
      messageSent: false,
    };
  },
  mutations: {
    portfolioPageShow(state) {
      state.portfolioPageActive = true;
    },
    getVisitorName(state, name) {
      state.visitorName = name;
    },
    whenPageLoaded(state) {
      state.pageLoaded = true;
    },
    messageSentAlertDisplay(state) {
      state.messageSent = true;

      setTimeout(() => {
        state.messageSent = false;
      }, 2000);
    },
  },
});
