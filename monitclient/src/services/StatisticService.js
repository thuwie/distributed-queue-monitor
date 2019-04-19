import Api from '@/services/Api';

export default {
  fetchStatistic() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    }).then(() => Api().get('statistic'));
  },
};
