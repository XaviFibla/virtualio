
import { Store } from 'vuex';

export function createStore() {
    return new Store({
        state() {
            return {
                user: {
                    id: 0,
                    name: '',
                },
            }
        },

    });
}
