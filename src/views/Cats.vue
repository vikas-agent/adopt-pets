<template lang="html">
  <div id="cats">
    <h2>Cats for Adoption</h2>
     <b-table striped hover :items="cats">
       <template v-slot:cell(name)="data">
     <!-- `data.value` is the value after formatted by the Formatter -->
     <router-link :to="`/pets/${data.index}`">{{data.value}}</router-link>
   </template>
     </b-table>
  </div>
</template>

<script>
import cats from '@/data/cats'
export default {
  name: 'Cats',
  data() {
    return {
      cats
      }
  }
}
</script>

<style lang="scss" scoped>
</style>
