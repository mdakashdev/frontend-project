<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

const series = [34, 18, 15, 12, 10, 11];

const chartOptions = {
  chart: {
    type: "donut",
    toolbar: {
      show: false,
    },
    fontFamily: "inherit",
  },

  labels: [
    "Engineering",
    "Marketing",
    "Design",
    "Sales",
    "HR",
    "Others",
  ],

  colors: [
    "#2563eb",
    "#10b981",
    "#8b5cf6",
    "#f59e0b",
    "#0d9488",
    "#94a3b8",
  ],

  dataLabels: {
    enabled: false,
  },

  legend: {
    position: "right",
    fontSize: "13px",
    labels: {
      colors: "#334155",
    },
  },

  plotOptions: {
    pie: {
      donut: {
        size: "68%",

        labels: {
          show: true,

          total: {
            show: true,
            label: "Total",
            formatter: () => "1,248",
          },
        },
      },
    },
  },

  stroke: {
    width: 2,
    colors: ["#ffffff"],
  },

  tooltip: {
    y: {
      formatter: (value: number) => `${value}%`,
    },
  },
};
</script>

<template>
  <VueApexCharts
    type="donut"
    height="320"
    :options="chartOptions"
    :series="series"
  />
</template>
