import axios from 'axios';


const api1url = url => {
    return `api-1.0${url}`;
};

const api = {
    get: (url, config) => {
        return axios.get(api1url(url),config);
    },
    post: (url, data = {}, config = {}) => {
        return axios.post(api1url(url), data, config);
    },
};

export default api;

