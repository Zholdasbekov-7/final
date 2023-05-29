import Axios from 'axios';

export const axiosInstance = (baseURL) => {
    const axios = Axios.create({
        baseURL: 'https://api.api-ninjas.com/v1/' + baseURL,
        timeout: 2000,
        headers: {
            "X-Api-Key": "FfzwLiwJo00/rwo/wi7nCg==sWSxI7PW4UyicSW5"
        }
    });
    return axios;
};