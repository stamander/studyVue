<template>
  <Bar :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
  name: 'IncomeChart',
  components: {
    Bar
  },
  props: {
    chartData: {
      type: Object as PropType<any>,
      required: true
    },
    chartOptions: {
      type: Object as PropType<any>,
      required: true
    }
  }
})
</script>
