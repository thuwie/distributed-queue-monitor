import Api from '@/services/Api'

export default {
  fetchStatistic () {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, 100);
    })
    .then(() => Api().get('statistic'));
  }
}
