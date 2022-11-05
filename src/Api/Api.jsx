import axios from 'axios';

export const fetchImages = async (request, page) => {
  const options = {
    url: 'https://pixabay.com/api/',
    params: {
      key: '30078293-54d83a5a72e4f9742c7e44489',
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: '12',
      q: `${request}`,
      page: `${page}`,
    },
  };

  try {
    const response = await axios(options);
    return response.data.hits;
  } catch (error) {
    console.error(error);
  }
};
