import axios from 'axios';

axios.defaults.timeout = 1000;

export default () => axios.create({
  baseURL: 'https://monitserver.cfapps.eu10.hana.ondemand.com/',
});

