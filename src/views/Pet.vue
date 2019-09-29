<template lang="html">
  <div id="pet`">
    <h2>Pet</h2>
    <h4>{{animal.name}} is of species ({{$route.params.species}})</h4>
    <p>Age: {{animal.age}} years old</p>
    <p>Breed: {{animal.breed}}</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'Pet',
  data() {
    return {
      animal: {}
    }
  },
  computed: {
    ...mapState([
      'cats',
      'dogs'
    ])
  },
  mounted() {
    const animal = this[this.$route.params.species][this.$route.params.id];
    this.animal = animal;
  }
}
</script>

<style lang="scss" scoped>
</style>
