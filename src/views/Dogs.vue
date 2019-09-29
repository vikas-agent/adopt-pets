<template lang="html">
  <div id="dogs">
    <h2>Dogs for Adoption</h2>
    <b-table striped hover :items="dogs"></b-table>

  </div>
</template>

<script>
import dogs from '@/data/dogs'
export default {
  name: 'Dogs',
  data() {
    return {
      dogs
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
