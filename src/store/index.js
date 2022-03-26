import Vue from 'vue';
import Vuex from 'vuex';
import * as tvMazeApi from '../services/tvMazeApi';
import * as tvMazeSearchApi from '../services/tvMazeSearchApi';

import { LOAD_TVSHOWS_SUCCESS } from './mutation-types';

Vue.use(Vuex);

const state = () => ({
  tvShows: [],
});

const mutations = {
  [LOAD_TVSHOWS_SUCCESS](state, tvShows) {
    state.tvShows = tvShows;
  },
};

const actions = {
  async loadTvshowsAction({ commit }) {
    const tvShows = await tvMazeApi.getTVShows();
    commit(LOAD_TVSHOWS_SUCCESS, tvShows);
  },

  async loadTvshowsByNameAction({ commit }, query = '') {
    const tvShows = await tvMazeSearchApi.getTVShowbyNames(query);
    commit(LOAD_TVSHOWS_SUCCESS, tvShows);
  },
};
export default new Vuex.Store({
  state,
  mutations,
  actions,
});
