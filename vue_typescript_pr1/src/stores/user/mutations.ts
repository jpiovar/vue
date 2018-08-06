import { MutationTree } from 'vuex';
import { UserStore } from './user.types';

export const mutations: MutationTree<UserStore> = {
    affectItemObjMutation(state: UserStore, value: string ) {
        state.itemObj = state.itemObj + value;
    }
}