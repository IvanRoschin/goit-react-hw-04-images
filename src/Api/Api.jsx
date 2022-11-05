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
    if (response.data.total === 0) {
      return Promise.reject(new Error('Where are no results for your request'));
    } else {
      const hits = response.data.hits;
      const total = response.data.total;
      return { hits, total };
    }
  } catch (error) {
    console.log(error);
  }
};
