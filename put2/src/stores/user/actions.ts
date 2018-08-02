import { ActionTree, ActionContext } from 'vuex';
import { RootState } from '../types';
import { UserStore } from './user.types';

export const actions: ActionTree<UserStore, RootState> = {
    affectItemObjAction({ commit }: ActionContext<UserStore, RootState>, { objValue }: { objValue: object }) {
        commit('affectItemObjMutation', objValue);
    }
};
