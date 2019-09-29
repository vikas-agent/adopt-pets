export default {
  allPetsCount: (state) => {
    return state.cats.length + state.dogs.length;
  },
  getCats: (state) => {
    const cats = state.pets.filter((pet)=> {
      return pet.species === 'cats';
    })
    return cats;
  },
  getDogs: (state) => {
    const dogs = state.pets.filter((pet) => {
      return pet.species === 'dogs';
    })

    return dogs;
  }
}
