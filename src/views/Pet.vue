<template lang="html">
  <div id="pet`">
    <h2>Pet</h2>
    <span>{{$route.params.species}}</span>
    <span>{{$route.params.id}}</span>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Pet',
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
