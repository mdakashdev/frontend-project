<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

const series = [
  {
    name: "Employees",
    data: [8500, 15500, 14200, 21000, 18500, 28000, 32500],
  },
];

const chartOptions = {
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
    fontFamily: "inherit",
  },

  colors: ["#2563eb"],

  stroke: {
    curve: "smooth",
    width: 3,
  },

  fill: {
    type: "gradient",
    gradient: {
      opacityFrom: 0.35,
      opacityTo: 0.05,
    },
  },

  dataLabels: {
    enabled: false,
  },

  markers: {
    size: 4,
  },

  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
    ],

    labels: {
      style: {
        colors: "#64748b",
      },
    },

    axisBorder: {
      show: false,
    },

    axisTicks: {
      show: false,
    },
  },

  yaxis: {
    labels: {
      style: {
        colors: "#64748b",
      },

      formatter: (value: number) => `${value / 1000}K`,
    },
  },

  grid: {
    borderColor: "#e2e8f0",
    strokeDashArray: 4,
  },

  tooltip: {
    theme: "light",
  },
};
</script>

<template>
  <VueApexCharts
    type="area"
    height="320"
    :options="chartOptions"
    :series="series"
  />
</template>
