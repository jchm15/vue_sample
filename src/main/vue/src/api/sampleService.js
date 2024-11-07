import {apiClient} from '@utils/ApiClient.js';

let url = "";
const sampleGet = (params) => {
    return apiClient.get(url, { ...params })
        .then((res) => res.data.body)
        .catch((res) => console.log('res', res));
};

const samplePost = (params) => {
    return apiClient.post(url, { ...params })
        .then((res) => res)
        .catch((res) => {
            if(res.response.data.message === 'duplicated Medicine') {
                alert("중복");
            }
        });
};