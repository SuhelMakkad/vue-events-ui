import { getEvent, getEvents, postEvent } from "@/services/EventService";
import { createStore } from "vuex";

export default createStore({
  state: {
    user: "Suhel Makkad",
    events: null,
    event: null,
  },

  getters: {},

  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },

    SET_EVENT(state, event) {
      state.event = event;
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

    fetchEvent({ commit, state }, id) {
      let event = state.events?.find((event) => event.id === id);

      if (!event) event = getEvent(id);

      commit("SET_EVENT", event);
    },
  },

  modules: {},
});
