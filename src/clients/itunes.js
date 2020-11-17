import axios from 'axios';

const itunesHost = axios.create({
    baseURL: 'https://itunes.apple.com'
});

const itunesApi = {
    search(params) {
        return itunesHost.get('/search', {
            params
        });
    }
};

export default itunesApi;