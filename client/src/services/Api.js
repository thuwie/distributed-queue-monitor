import axios from 'axios'
axios.defaults.timeout = 1000;
export default() => {
  return axios.create({
    baseURL: `http://localhost:8081`
  });
}
