import Vuex from 'vuex';
import { getters } from '../../../src/stores/headline/getters';
import { mutations } from '../../../src/stores/headline/mutations';
import { actions } from '../../../src/stores/headline/actions';
import {HeadlineStore, ValidationProblem} from '../../../src/stores/headline/headline.types';
import { actions as hListActions } from '../../../src/stores/headlineList/actions';
import { mutations as hListMutations } from '../../../src/stores/headlineList/mutations';
import { HeadlineListStore } from '../../../src/stores/headlineList/headlineList.types';

export const createAuthAdapter = (signIn = jest.fn(), hasValidToken = jest.fn()) =>
    () => ({
        w3IdAuthService: {
            signIn,
            hasValidToken
        }
    });

// helper for testing action with expected mutations
export const testAction = (action: any, payload: any, state: any, expectedMutations: any[], done: Function, options = {}) => {
    let count = 0;

    // mock commit
    const commit = (type: string, payload: any) => {
        const mutation = expectedMutations[count];

        try {
            if (mutation && mutation.type) {
                expect(mutation.type).toBe(type);
            }

            if (payload && mutation && mutation.payload) {
                expect(mutation.payload).toEqual(payload);
            }
        } catch (error) {
            done(error);
        }

        count++;
        if (count >= expectedMutations.length) {
            done();
        }
    };
    // call the action with mocked store and arguments
    action({ commit, state, ...options }, payload);

    // check if no mutations should have been dispatched
    if (expectedMutations.length === 0) {
        expect(count).toEqual(0);
        done();
    }
};

const overviewErr: Map<string, ValidationProblem> = new Map<string, ValidationProblem>();
overviewErr.set('contentOwner', { id: 'contentOwner', msg: 'requiredForPublish', type: 'warning' });
overviewErr.set('duration', { id: 'duration', msg: 'requiredForPublish', type: 'error' });

export const createHeadlineStore = (state: HeadlineStore = {
    headline: {
        contentOwner: '',
        priority: 3,
        startTime: 1530363060000,
        endTime: 1531151460000
    },
    validationProblems: {
        overview: overviewErr,
        details: new Map<string, ValidationProblem>()
    },
    dataState: 'init',
    error: ''
}) =>
    new Vuex.Store({
        state: {},
        modules: {
            headline: {
                actions: {
                    ...actions,
                    fetchDetails() {}
                },
                mutations,
                getters,
                state,
                namespaced: true
            },
            config: {
                namespaced: true,
                getters: {
                    getSpecificConf: () => () => ({}),
                    getServiceConf: () => () => ({ hostname: 'ibm.com', port: '', protocol: 'https'}),
                    getServiceFormattedURL: () => () => 'https://w3-broadcast-w3-broadcast-be-test.w3-9203.ibm.com'
                }
            }
        }
    });

export const createHeadlineListStore = (state: HeadlineListStore = {
    headlines: [
        {
            contentOwner: '',
            headlineId: '',
            title: ''
        }
    ]
}) =>
    new Vuex.Store({
        state: {},
        modules: {
            headlineList: {
                state,
                mutations: hListMutations,
                actions: {
                    ...hListActions,
                    fetchDetails() {}
                },
                namespaced: true
            },
            config: {
                namespaced: true,
                getters: {
                    getSpecificConf: () => () => ({}),
                    getServiceConf: () => () => ({ hostname: 'ibm.com', port: '', protocol: 'https' }),
                    getServiceFormattedURL: () => () => 'https://w3-broadcast-w3-broadcast-be-test.w3-9203.ibm.com'
                }
            }
        }
    });
