import {post, get} from '../utils/ApiClient.js';

export function sampleGet(params) {
    return get('/api/hello', { ...params })
        .then((res) => res.data.body)
        .catch((res) => console.log('res', res));
};

export function samplePost(params){
    return post('/api/hello', {...params})
        .then((res) => res.data.body)
        .catch((res) => console.log('res', res));
};