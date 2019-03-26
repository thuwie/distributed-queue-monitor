
<template>
  <div class="statistic">
    <h1>Statistic</h1>
    <div v-if="statistic.length > 0">
      <div class="row">
        <div class="column">
          <count-stat v-bind:total="newestTotal" v-bind:fetched="newestFetched"></count-stat>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="chart-wrap">
            <la-cartesian :bound="[0, n => n + 1]" :data="statistic">
              <la-line dot curve :width="4" prop="totalCount"></la-line>
              <la-line dot curve :width="4" prop="fetchedCount"></la-line>
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
              <!-- <tr v-for="stat in statistic" :key="stat.id">
                <td>{{ stat.timestamp }}</td>
                <td>{{ stat.totalCount }}</td>
                <td>{{ stat.fetchedCount }}</td>
              </tr> -->
            </table>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      There is no stat data
      <br>
      <br>
    </div>
  </div>
</template>

<script>
import StatisticService from "@/services/StatisticService";
import CountStatistic from "@/components/CountStatistic";


export default {
  name: "statistic",
  components: {
    "count-stat": CountStatistic
  },
  data() {
    return {
      statistic: [],
      newestTotal: 0,
      newestFetched: 0
    };
  },
  mounted() {
    this.getStatistic();
  },
  methods: {
    async getStatistic() {
      const response = await StatisticService.fetchStatistic();
      this.statistic = response.data.statistic;
      this.newestTotal = this.statistic[this.statistic.length -1].totalCount;
      this.newestFetched = this.statistic[this.statistic.length-1].fetchedCount;
    }
  },
  watch: {
    statistic: function() {
      return this.getStatistic();
    }
  }
};
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
table th,
table tr {
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
