import axios from 'axios';

export default axios.create({
  baseURL: `https://et-server.vercel.app/`
});