import axios from 'axios';
import { getAuthToken } from './me';

const api1url = url => {
    return `api-1.0${url}`;
};

const getRequestHeader = config => {
    const authToken = getAuthToken();
    if(authToken) {
        return {
            ...config,
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }
    }
    return config;
};

const api = {
    get: (url, config = {}) => {
        return axios.get(api1url(url), getRequestHeader(config));
    },
    post: (url, data = {}, config = {}) => {
        return axios.post(api1url(url), data, getRequestHeader(config));
    },
    patch: (url, data = {}, config = {}) => {
        return axios.patch(api1url(url), data, getRequestHeader(config));
    },
    delete: (url, config = {}) => {
        return axios.delete(api1url(url), getRequestHeader(config));
    }
};

export default api;

