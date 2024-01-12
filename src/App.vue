<script>

// IMPORTO I COMPONENTI
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

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
          store.arrayFilms = res.data.results;
          console.log(store.arrayFilms);
          store.checkFilm = true;
        })
        .catch(error => {
          console.log("ERRORE CHIAMATA API", error);
        })
    },
    
    getSerie() {
      console.log("SONO DENTRO SERIE");
      let filmsURL = store.serieURL;
      if (store.titleFilm !== "") {
        filmsURL += `&query= ${store.titleFilm}`;
      }
      axios
        .get(filmsURL)
        .then(res => {
          store.arraySerie = res.data.results;
          console.log(store.arraySerie);
          store.checkSerie = true;
        })
        .catch(error => {
          console.log("ERRORE CHIAMATA API", error);
        })
    },

    getApi(){
      this.getFilms();
      this.getSerie();
    }
  },
}

</script>

<template>
  <div>
    <AppHeader @search="getApi" />
    <AppMain />

  </div>
</template>

<style lang="scss">
@use 'style/general.scss' as *;
@use 'style/partials/mixins' as *;
@use 'style/partials/variable' as *;

</style>
