<template lang="html">
  <div id="cats">
    <h2>Cats for Adoption</h2>
    <PetTable
    species="cats"
    :pets="cats">
    </PetTable>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import PetTable from '@/components/PetTable'
export default {
  name: 'Cats',
  components: {
    PetTable
  },
  data() {
    return {
      }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>

<style lang="scss" scoped>
</style>
