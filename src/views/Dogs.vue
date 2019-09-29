<template lang="html">
  <div id="dogs">
    <h2>Dogs for Adoption</h2>
    <PetTable
    species="dogs"
    :pets="dogs"
    />

  </div>
</template>

<script>
import PetTable from '@/components/PetTable';
import {mapState} from 'vuex';
export default {
  name: 'Dogs',
  components: {
    PetTable
  },
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
