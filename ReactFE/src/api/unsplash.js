import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 012cb8cfd5963a7c599f66e5306bc7ac2436bc3d6597718ab219b9e52494c558'
  }
});
