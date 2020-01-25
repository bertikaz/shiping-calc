import axios from 'axios'
import store from '@/store'

const url = '/';

function getRequest(method, params = null, mockPath = '') {
    store.dispatch('showPreLoader', true);
    return mockPath ? getMockData(mockPath) : axios.get(url + method, {params}).then(
        (response) => {
            setTimeout(store.dispatch('toggleLoading', false), 10000);

            return response;
        }
    ).catch(
        () => {
            store.dispatch('toggleLoading', false);
        }
    )
}

function postRequest(method, payload = {}, mockPath = '') {
    store.dispatch('showPreLoader', true);
    return mockPath ? getMockData(mockPath) : axios.post(url + method, payload).then(
        (response) => {
            setTimeout(store.dispatch('toggleLoading', false), 10000);

            return response
        }
    ).catch(
        () => {
            store.dispatch('toggleLoading', false);
        });
}

function getMockData(path) {
    return new Promise((resolve) => {
        return resolve(require(`@/mocks/${path}.js`).default);
    });
}


export {
    getRequest,
    postRequest
}
