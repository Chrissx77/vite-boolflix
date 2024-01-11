<script>

// IMPORTO I COMPONENTI
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'

// IMPORTO AXIOS PER API
import axios from 'axios';

// IMPORTO STORE.JS
import { store } from './store';

export default {
  components: {
    AppHeader,
    AppMain
  },

  data() {
    return {
      store,
    }
  },

  methods: {
    getFilms() {
      let filmsURL = store.movieURL;
      if (store.titleFilm !== "") {
        filmsURL += `&query= ${store.titleFilm}`;
      }
      axios
        .get(filmsURL)
        .then(res => {
          console.log(res.data.results);
          store.arrayFilms = res.data.results;
          console.log(store.arrayFilms);
        })
        .catch(error => {
          console.log("ERRORE CHIAMATA API", error);
        })
    }
  },

  created() {
    this.getFilms();
  }
}

</script>

<template>
  <AppHeader @search="getFilms" />
  <AppMain />
</template>

<style lang="scss">
@use 'style/general.scss' as *;
@use 'style/partials/mixins' as *;
@use 'style/partials/variable' as *;
</style>
