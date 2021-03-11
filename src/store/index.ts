import { createStore } from "vuex";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  // what to store
  // stored in $store.state
  state: {},

  // state: { data: 0, }
  // retrieving states, it's like computed property but global
  // stored in $store.getters
  getters: {},
  // getters: { data: (state, optionalOtherGetters) => state.data, }
  // access by this.$store.getters.data
  // should not mutate the state
  // function-type getters are registered like this:
  // getters: { (state) => (param) => /* do something with param and get the state */ }

  // for mutating states synchronously
  // can be accessed by in $store.commit('mutation', { optional payload })
  mutations: {},
  // mutations: { mutateData(state, optionalPayload) => /* mutate the state */ }

  // for mutating states asynchronously, commits mutations to the state
  // instead of doing it itself
  // can be accessed by in $store.dispatch('action', { optional payload })
  actions: {},
  // actions: { (context, optionalPayload) => /* do actions */ }
  // context contains { state, getters, commit, dispatch } and can be destructed
  // actions can be async

  modules: {},
});
