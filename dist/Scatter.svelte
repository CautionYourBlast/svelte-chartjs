<script lang="ts">
  import { Chart as ChartJS, ScatterController } from 'chart.js';
  import Chart from './Chart.svelte';
  import { useForwardEvents } from './utils/index.js';
  ChartJS.register(ScatterController);
  export let chart = null;
  let props;
  let baseChartRef;
  useForwardEvents(() => baseChartRef);
  $: props = $$props;
</script>

<Chart bind:this={baseChartRef} bind:chart type="scatter" {...props} />
