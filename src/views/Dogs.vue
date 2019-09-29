<template lang="html">
  <div id="dogs">
    <h2>Dogs for Adoption</h2>
    <b-table striped hover :items="dogs">
      <template v-slot:cell(name)="data">
    <!-- `data.value` is the value after formatted by the Formatter -->
    <router-link :to="`/pets/dogs/${data.index}`">{{data.value}}</router-link>
  </template>
    </b-table>

  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: 'Dogs',
  data() {
    return {

    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
