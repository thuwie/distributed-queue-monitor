import axios from 'axios'
axios.defaults.timeout = 1000;
export default() => {
  /*const httpServer*/ return axios.create({
    baseURL: `http://localhost:8081`
  });
  // httpServer.defaults.timeout = 5000;
  // return httpServer
}
