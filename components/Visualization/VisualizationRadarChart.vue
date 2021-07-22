<template>
  <div>
    <canvas ref="canvas" role="img" :aria-labelledby="title ? id : false" />
  </div>
</template>

<script>
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Title,
} from 'chart.js'

export default {
  props: {
    title: {
      type: String,
      default: '',
    },

    data: {
      type: [Array, Object],
      required: true,
    },

    gridStyle: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      chart: null,
    }
  },

  computed: {
    id() {
      return this._uid
    },
  },

  mounted() {
    Chart.register(
      RadarController,
      RadialLinearScale,
      PointElement,
      LineElement,
      Tooltip,
      Title
    )

    Chart.defaults.font.family = 'Circular'

    this.chart = new Chart(this.$refs.canvas, {
      type: 'radar',
      data: {
        labels: Object.keys(this.data).map(
          (key) => key.charAt(0).toUpperCase() + key.slice(1)
        ),
        datasets: [
          {
            data: Object.values(this.data),
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: this.title,
            font: {
              size: 24,
            },
            color: '#fff',
          },
          tooltip: {
            displayColors: false,
          },
        },
        scales: {
          radialLinear: {
            ticks: {
              display: false,
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.25)',
            },
            angleLines: {
              color: 'rgba(255, 255, 255, 0.25)',
            },
            pointLabels: {
              font: {
                size: 14,
              },
            },
          },
        },
        elements: {
          point: {
            radius: 5,
            hoverRadius: 8,
            backgroundColor: 'rgba(29, 185, 84, 1)',
          },
          line: {
            borderColor: 'rgba(29, 185, 84, 0.5)',
          },
        },
      },
    })
  },
}
</script>
