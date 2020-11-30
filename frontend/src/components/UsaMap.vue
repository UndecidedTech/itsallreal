<template>
    <div id="map">
      <p>BRAN IS RENDER</p>
      <svg ref="svg" height="300" width="500">
      <path
      v-for="state in stateData"
      :key="state.feature.id"
      :d="pathGenerator(state.feature)"
      :style="{
        fill: state.color,
        stroke: 'darkslategray'
      }"
    />
    </svg>
    </div>
</template>

<script>
import * as d3 from 'd3'
import axios from 'axios'
export default {
  name: 'UsaMap',
  data () {
    return {
      statesJson: null,
      redStates: [],
      blueStates: [],
      swingStates: []
    }
  },
  methods: {
    async loadJson () {
      const res = await axios.get('https://api.github.com/gists/e0d1b7950ced31369c903bed0cead7b1')
      this.statesJson = JSON.parse(res.data.files['us_features.json'].content)
    }
  },
  computed: {
    // Typical projection for showing all states scaled and positioned appropriately
    projection () {
      return d3.geoAlbersUsa().scale(600).translate([250, 150])
    },

    // Function for converting GPS coordinates into path coordinates
    pathGenerator () {
      return d3.geoPath().projection(this.projection)
    },
    stateData () {
      return this.statesJson ? this.statesJson.features.map(feature => {
        return {
          feature,
          color: '#FF000'
        }
      }) : []
    },
    // stateData () {
    //   return this.statesJson ? this.statesJson.features.map(feature => {
    //     const state = this.happiestStates.find(state => state.state === feature.id)
    //     return {
    //       feature,
    //       color: this.stateColor(state.rank)
    //     }
    //   }) : []
    // },
    // cityData () {
    //   return this.happiestCities.map(city => {
    //     return {
    //       city: city.city,
    //       x: this.projection([city.lng, city.lat])[0],
    //       y: this.projection([city.lng, city.lat])[1],
    //       color: this.cityColor(city.rank),
    //       size: this.citySize(city.rank)
    //     }
    //   })
    // },
    // stateColor () {
    //   return d3.scaleSequential().domain([50, 1]).interpolator(d3.interpolateRdYlGn)
    // },

    cityColor () {
      return d3.scaleLinear().domain([20, 1]).range(['#32a852', '#10732b'])
    },

    citySize () {
      return d3.scaleLinear().domain([20, 1]).range([5, 15])
    }
  },
  created () {
    this.loadJson()
  }
}
</script>

<style lang="scss" scoped>

</style>
