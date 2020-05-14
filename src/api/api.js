import axios from 'axios';

export default {
    fetchData() {
        const instance = axios.create({
            url: '/users',
            baseURL: 'https://5ea5b3f02d86f00016b46164.mockapi.io/api/v1',
            responseType: 'json',
        });

        const data = instance.get('/users')
            .then((response) => {
                // eslint-disable-next-line no-console
                console.log(response.data);
                return response;
            });

        return data;
    },
};
