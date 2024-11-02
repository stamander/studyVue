<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from '@/incomeChartConfig'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'IncomeChart',
  components: {
    Bar
  },
  computed: {
    chartData() {
      // dataオブジェクトを深くコピーして返す
      return JSON.parse(JSON.stringify(chartConfig.data))
    },
    chartOptions() {
      return chartConfig.options
    }
  }
}
</script>
