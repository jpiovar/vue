import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { UserStore } from './user.types';

export const getters: GetterTree<UserStore, RootState> = {
    getItemObj(state: UserStore): Function {
        return (): Object => {
            return state.itemObj;
        };
    }
};

