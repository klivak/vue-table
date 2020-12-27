import axios from '@/api/axios';

const products = data => {
  return axios.get('/data/products.json', {baseURL: window.location.origin});
};

export default {
  products
};
