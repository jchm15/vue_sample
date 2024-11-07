import {apiClient} from '@utils/ApiClient.js';

const sampleGet = (params) => {
    return apiClient.get('/api/hello', { ...params })
        .then((res) => res.data.body)
        .catch((res) => console.log('res', res));
};

const samplePost = (params) => {
    return apiClient.post('/api/hello', { ...params })
        .then((res) => res.data.body)
        .catch((res) => console.log('res', res));
};