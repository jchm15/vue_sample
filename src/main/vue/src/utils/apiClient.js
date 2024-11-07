import axios from 'axios';

export async function post(url, params) {
    try {
        const response = await axios.post(url, params);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function get(url, params) {
    try {
        const response = await axios.get(url, params);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
