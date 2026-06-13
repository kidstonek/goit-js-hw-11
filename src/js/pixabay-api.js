import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '56291655-46a36a1bb1a9da85580c7f68a'
};


export function getImagesByQuery(query) {
    return axios.get('', {
        params: {
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
        }
    }).then(res => res.data).then(res => res.hits)
}

