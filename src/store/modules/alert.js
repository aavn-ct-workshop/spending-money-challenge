const state = {
  message: null,
};

const mutations = {
  error(state, message) {
    state.message = message;
  },
  clear(state) {
    state.message = null;
  },
};

const actions = {
  error({ commit }, message) {
    commit("error", message);
  },
  clear({ commit }) {
    commit("clear");
  },
};

export const alert = {
  namespaced: true,
  state,
  actions,
  mutations,
};
