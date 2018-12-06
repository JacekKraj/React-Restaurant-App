import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://restaurant-react-bk.firebaseio.com/'
});

export default instance;
