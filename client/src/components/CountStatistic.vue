<template>
  <div id="animated-number-demo">
    <p>Total items:        {{ animatedTotal }}</p>
    <p>Fetched items:   {{ fetched }}</p>
  </div>
</template>

<script>
import { TimelineLite, Back, TweenLite } from 'gsap';

export default {
  props: ["total", "fetched"],
  data: function() {
    return {
      total: 0,
      fetched: 0
    };
  },
  computed: {
    animatedTotal: function() {
      return this.total.toFixed(0);
    }
  },
  watch: {
    total: function(newValue) {
      TweenLite.to(this.$data, 0.5, { total: newValue });
    }
  }
};
</script>

<style type="text/css">
</style>
