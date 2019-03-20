
<template>
  <div class="statistic">
    <h1>Statistic</h1>
    <div v-if="statistic.length > 0"> 
      <div class="row">
        <div class="column">
            <div class="chart-wrap"> 
              <la-cartesian :bound="[0, n => n + 1000]" :data="statistic">
                <la-line dot curve :width="4" prop="totalCount"></la-line>
                <la-line dot curve :width="4" prop="fetchedCount"></la-line>
                <la-x-axis prop="timestamp"></la-x-axis>
                <la-y-axis></la-y-axis>
              </la-cartesian>
            </div>
            <div class="chart-wrap"> 
              <la-cartesian :data="statistic">
                <defs>
                  <linearGradient id="color-id" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#2c3e50"></stop>
                    <stop offset="0" stop-color="#42b983"></stop>
                    <stop offset="0" stop-color="#6fa8dc"></stop>
                  </linearGradient>
                  <linearGradient id="color-id2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="#B22222"></stop>
                    <stop offset="0" stop-color="#8B0000"></stop>
                    <stop offset="0" stop-color="#800000"></stop>
                  </linearGradient>
                </defs>
                <la-line curve :width="6" prop="totalCount"  color="url(#color-id)"></la-line>
                <la-line curve :width="6" prop="fetchedCount"  color="url(#color-id2)"></la-line>
                <la-x-axis></la-x-axis>
                <la-y-axis></la-y-axis>
              </la-cartesian>
            </div>
        </div>
        <div class="column">
            <div class="chart-wrap"> 
              <la-cartesian :bound="[0, n => n + 1000]" :data="statistic">
                <la-area dot curve prop="totalCount"></la-area>
                <la-area dot curve prop="fetchedCount"></la-area>
                <la-x-axis prop="timestamp"></la-x-axis>
                <la-y-axis></la-y-axis>
              </la-cartesian>
            </div>
            <div class="chart-wrap"> 
              <la-cartesian :bound="[0, n => n + 1000]" :data="statistic">
                <defs>
                  <linearGradient id="area-fill3" x1="0" y1="0" x2="0" y2="1">
                    <stop stop-color="#0076b1" offset="0%" stop-opacity="0.4"></stop>
                    <stop stop-color="#0076b1" offset="50%" stop-opacity="0.2"></stop>
                    <stop stop-color="#0076b1" offset="100%" stop-opacity="0"></stop>
                  </linearGradient>
                  <linearGradient id="area-fill4" x1="0" y1="0" x2="0" y2="1">
                    <stop stop-color="#FF0000" offset="0%" stop-opacity="0.4"></stop>
                    <stop stop-color="#FF0000" offset="50%" stop-opacity="0.2"></stop>
                    <stop stop-color="#FF0000" offset="100%" stop-opacity="0"></stop>
                  </linearGradient>
                </defs>
                <la-area fill-color="url(#area-fill3)" dot curve prop="totalCount"></la-area>
                <la-area fill-color="url(#area-fill4)" dot curve prop="fetchedCount"></la-area>
                <la-x-axis prop="timestamp"></la-x-axis>
                <la-y-axis></la-y-axis>
              </la-cartesian>
            </div>
          </div>
      </div>      
      <div class="row">
        <div class="column">
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
  align-items: center;
  margin-top: 10%;
  margin-bottom: 10%;
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

.row {
  display: flex;
  margin-bottom: 1in;
}

.column {
  flex: 50%;
}
</style>
