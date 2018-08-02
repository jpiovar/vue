import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    itemObj: 'itemObj content'
  },
  getters: {
    getItemObj: state => {
      return state.itemObj;
    }
  },
  mutations: {
    affectItemObjMutation: (state, payload) => {
      state.itemObj = state.itemObj + ' aA ' + payload;
    }
  },
  actions: {
    affectItemObjAction: (context, payload) => {
      context.commit('affectItemObjMutation', payload);
    }
  }
});
