
<template>
  <div class="statistic">
    <h1>Statistic</h1>
    <div v-if="statistic.length > 0">
      <la-cartesian :bound="[0, n => n + 1000]"
                    :data="statistic"
                    :autoresize="true"
                    :showValue="true">
          <la-line dot curve :width="4" prop="totalCount" label="Total count"></la-line>
          <la-line dot curve :width="4" prop="fetchedCount" label="Fetched count"></la-line>
          <la-x-axis prop="timestamp"></la-x-axis>
          <la-y-axis></la-y-axis>
          <la-tooltip></la-tooltip>
        </la-cartesian>
    </div>
    <div v-else>
      There is no stat data <br /><br />
    </div>
    </div>
</template>

<script>
import StatisticService from '@/services/StatisticService';

export default {
  name: 'statistic',
  data() {
    return {
      statistic: [],
    };
  },
  mounted() {
    this.getStatistic();
  },
  methods: {
    async getStatistic() {
      const response = await StatisticService.fetchStatistic();
      this.statistic = response.data.statistic;
      const date = new Date();
      for (const stat in this.statistic) {
        if (this.statistic[stat].hasOwnProperty('timestamp')) {
          date.setTime(this.statistic[stat].timestamp);
          this.statistic[stat].timestamp = date.toUTCString();
        }
      }
    },
  },
  watch: {
    statistic: () => this.getStatistic(),
  },
};
</script>
<style type="text/css">
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

.list li {
  padding: 5px 10px;
  flex: 1;
  color: #fff;
  margin: 0;
  min-width: 90px;
}

.list li::before {
  content: none;
}
</style>
