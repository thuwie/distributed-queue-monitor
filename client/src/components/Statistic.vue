
<template>
  <div class="statistic">
    <h1>Statistic</h1>
    <div v-if="statistic.length > 0" class="table-wrap">
      <table>
        <tr>
          <td>Timestamp</td>
          <td width="100" align="center">Total count</td>
          <td width="100" align="center">Fetched count</td>
        </tr>
        <tr v-for="stat in statistic" :key="stat.id">
          <td>{{ stat.timestamp }}</td>
          <td>{{ stat.totalCount }}</td>
          <td>{{ stat.fetchedCount }}</td>
        </tr>
      </table>
    </div>
    <div v-else>
      There is no stat data <br /><br />
    </div>
  </div>
</template>

<script>
import StatisticService from '@/services/StatisticService'

export default {
  name: 'statistic',
  data () {
    return {
      statistic: []
    }
  },
  mounted () {
    this.getStatistic()
  },
  methods: {
    async getStatistic () {
      const response = await StatisticService.fetchStatistic()
      this.statistic = response.data.statistic
    }
  },
  watch: {
    statistic: function () {
      return this.getStatistic()
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
</style>
