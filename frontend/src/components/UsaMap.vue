<template>
  <div class="">
    <button class="btn btn-secondary float-right" @click="clearFilter">Reset</button>
    <radio-svg-map :map="USA" v-model="selectedLocation" :location-class="getLocationClass"/>
  </div>
</template>

<script>
import { RadioSvgMap } from 'vue-svg-map'
import USA from '@svg-maps/usa'
import { mapActions } from 'vuex'
export default {
  name: 'UsaMap',
  components: {
    RadioSvgMap
  },
  data () {
    return {
      statesRef: [
        { state: 'HI', status: 'blue' },
        { state: 'UT', status: 'red' },
        { state: 'MN', status: 'blue' },
        { state: 'CA', status: 'blue' },
        { state: 'NJ', status: 'blue' },
        { state: 'ID', status: 'red' },
        { state: 'MA', status: 'blue' },
        { state: 'MD', status: 'blue' },
        { state: 'NE', status: 'red' },
        { state: 'CT', status: 'blue' },
        { state: 'IA', status: 'red' },
        { state: 'ND', status: 'red' },
        { state: 'NV', status: 'grey' },
        { state: 'VA', status: 'blue' },
        { state: 'NY', status: 'blue' },
        { state: 'DE', status: 'blue' },
        { state: 'GA', status: 'grey' },
        { state: 'AZ', status: 'grey' },
        { state: 'CO', status: 'blue' },
        { state: 'VT', status: 'blue' },
        { state: 'WA', status: 'blue' },
        { state: 'NH', status: 'blue' },
        { state: 'TX', status: 'red' },
        { state: 'IL', status: 'blue' },
        { state: 'WI', status: 'blue' },
        { state: 'PA', status: 'grey' },
        { state: 'SD', status: 'red' },
        { state: 'FL', status: 'red' },
        { state: 'SC', status: 'red' },
        { state: 'NC', status: 'red' },
        { state: 'MT', status: 'red' },
        { state: 'KS', status: 'red' },
        { state: 'RI', status: 'blue' },
        { state: 'WY', status: 'red' },
        { state: 'IN', status: 'red' },
        { state: 'MI', status: 'blue' },
        { state: 'OH', status: 'red' },
        { state: 'ME', status: 'blue' },
        { state: 'OR', status: 'blue' },
        { state: 'NM', status: 'blue' },
        { state: 'MO', status: 'red' },
        { state: 'TN', status: 'red' },
        { state: 'OK', status: 'red' },
        { state: 'AL', status: 'red' },
        { state: 'KY', status: 'red' },
        { state: 'LA', status: 'red' },
        { state: 'MS', status: 'red' },
        { state: 'AK', status: 'red' },
        { state: 'AR', status: 'red' },
        { state: 'WV', status: 'red' }
      ],
      USA,
      selectedLocation: null
    }
  },
  methods: {
    ...mapActions({
      setState: 'tweets/setState',
      getTweets: 'tweets/getTweets'
    }),
    clearFilter () {
      this.selectedLocation = null
    },
    getLocationClass (location, index) {
      // set Red or Blue
      let state
      for (let i = 0; i < this.statesRef.length; i++) {
        if (this.statesRef[i].state === location.id.toUpperCase()) {
          state = this.statesRef[i]
          if (state.status === 'red') {
            return 'svg-map__red'
          } else if (state.status === 'blue') {
            return 'svg-map__blue'
          } else {
            return 'svg-map__grey'
          }
        }
      }
    }
  },
  watch: {
    selectedLocation: function () {
      console.log(this.selectedLocation)
      this.setState(this.selectedLocation)
      this.getTweets()
    }
  },
  mounted () {
  }
}
</script>

<style src="vue-svg-map/dist/index.css">

</style>
