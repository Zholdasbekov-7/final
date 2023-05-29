import { axiosInstance } from ".";

class CityAPI {
    axios = axiosInstance('');

    async countries(name) {
        const response = await this.axios.get('country', {
            params: {
                name: name,
                limit: 50,
            }
        });
        return response;
    }
    async cities(country) {
        const response = await this.axios.get('city', {
            params: {
                country: country,
            }
        });
        return response;
    }
}

export const cityAPI = new CityAPI();