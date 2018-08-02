import { Module } from 'vuex';
import { RootState } from '../types';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { UserStore } from './user.types';

const state: UserStore = {
    itemObj: {}
};

const namespaced = true;

export const user: Module<UserStore, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
