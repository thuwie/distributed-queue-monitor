import Api from '@/services/Api'

export default {
  fetchStatistic () {
    return Api().get('statistic')
  }
}
