import { MutationTree } from 'vuex';
import { UserStore } from './user.types';

export const mutations: MutationTree<UserStore> = {
    affectItemObjMutation(state: UserStore, { value }: { value: string | number | boolean }) {
        state.itemObj = Object.assign({}, state.itemObj, { value: value });
    }
}