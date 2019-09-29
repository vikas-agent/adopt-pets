<template>
  <div class="home">
    <h2>Home of your new best friend.</h2>
    <hr>
    <b-button  variant="primary" @click="toggleForm">
        Add Pet
    </b-button>
    <hr>
    <b-form @submit.prevent="onSubmit" v-if="showPetForm">


     <b-form-group id="input-group-2" label="Pet Name:" label-for="input-2">
       <b-form-input
         id="input-2"
         v-model="formData.name"
         required
         placeholder="Enter Pet name"
       ></b-form-input>
     </b-form-group>

     <b-form-group id="input-group-3" label="species:" label-for="input-3">
       <b-form-select
         id="input-3"
         v-model="formData.species"
         :options="['cats', 'dogs']"
         required
       ></b-form-select>
     </b-form-group>



     <b-form-group id="input-group-3" label="Age:" label-for="input-4">
      <b-form-input
      id="input-4"
       v-model="formData.age"
     type="number"
     placeholder="Enter Pests age"
     required
     ></b-form-input>
   </b-form-group>
     <b-button type="submit" variant="primary">Submit</b-button>

   </b-form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'home',
  data() {
    return {
      showPetForm: false,
      formData: {
        name: '',
        age:0,
        species: null
      }
    }
  },
  methods: {
    ...mapActions(['addPet']),
    toggleForm() {
      this.showPetForm = !this.showPetForm;
    },
    onSubmit() {
      const {name, age, species} = this.formData;

    let  payload = {
        species,
        pet: this.formData
      }

      this.addPet(payload);

      this.formData = {
        name: '',
        age:0,
        species: null
      }
    }
  }
}
</script>
