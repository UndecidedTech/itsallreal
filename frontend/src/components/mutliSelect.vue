<template>
  <div>
    <multiselect v-model="value" :options="options" :multiple="true"></multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  // OR register locally
  components: { Multiselect },
  data () {
    return {
      value: null,
      options: [
        'al',
        'ak',
        'as',
        'az',
        'ar',
        'ca',
        'co',
        'ct',
        'de',
        'dc',
        'fm',
        'fl',
        'ga',
        'gu',
        'hi',
        'id',
        'il',
        'in',
        'ia',
        'ks',
        'ky',
        'la',
        'me',
        'mh',
        'md',
        'ma',
        'mi',
        'mn',
        'ms',
        'mo',
        'mt',
        'ne',
        'nv',
        'nh',
        'nj',
        'nm',
        'ny',
        'nc',
        'nd',
        'mp',
        'oh',
        'ok',
        'or',
        'pw',
        'pa',
        'pr',
        'ri',
        'sc',
        'sd',
        'tn',
        'tx',
        'ut',
        'vt',
        'vi',
        'va',
        'wa',
        'wv',
        'wi',
        'wy',
        'ae',
        'aa',
        'ap'
      ]
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
