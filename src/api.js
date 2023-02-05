import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID process.env.REACT_APP_ACCESS_KEY',
            // put hard access key instead process.env
        },
        params: {
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;