import axios from 'axios';

export async function axiosPost(url, params) {
    try {
        const response = await axios.post(url, params);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function axiosGet(url, params) {
    try {
        const response = await axios.get(url, params);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
