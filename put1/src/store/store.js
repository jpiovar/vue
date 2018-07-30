import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    items: [
      {
        id: 'id1',
        label: 'item1 abc',
        description: 'item1 is more complexed information about nothing'
      },
      {
        id: 'id2',
        label: 'item2 abcefgh',
        description: 'item2 is less complexed information about nothing'
      }
    ]
  },
  getters: {
    doubleItems: state => {
      return state.items.map(item => {
        return {
          id: item.id,
          label: item.label + ' double',
          description: item.description
        }
      });
    }
  },
  mutations: {
    affectItemsMutation: (state, payload) => {
      state.items.forEach(element => {
        element.label = element.label + payload;
      });
    }
  },
  actions: {
    affectItemsAction: (context, payload) => {
      setTimeout(() => {
        context.commit('affectItemsMutation', payload);
      }, 2000);
    }
  }
});
