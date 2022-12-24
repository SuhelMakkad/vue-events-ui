import { getEvents, postEvent } from "@/services/EventService";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: "Suhel Makkad",
    events: null,
  },

  getters: {},

  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },

    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },

  actions: {
    createEvent({ commit }, event) {
      postEvent(event);
      commit("ADD_EVENT", event);
    },

    fetchEvents({ commit }) {
      const events = getEvents();
      commit("SET_EVENTS", events);
    },
  },

  modules: {},
});
