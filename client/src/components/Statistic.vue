
<template>
  <div class="statistic">
    <h1>Statistic</h1>
    <div v-if="statistic.length > 0"> 
      <div class="chart-wrap"> 
        <la-cartesian :bound="[0, n => n + 1000]" :data="statistic">
          <la-line dot curve prop="totalCount"></la-line>
          <la-line dot curve prop="fetchedCount"></la-line>
          <la-x-axis prop="timestamp"></la-x-axis>
          <la-y-axis></la-y-axis>
        </la-cartesian>
      </div>
    
    <br />
    <br />
    <br />
    <div class="table-wrap">
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
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.chart-wrap {
  display: flex;
  justify-content: center;
  align-items: center
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
