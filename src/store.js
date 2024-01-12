import {reactive} from "vue";

export const store = reactive({
    arrayFilms: [],
    movieURL: 'https://api.themoviedb.org/3/search/movie?api_key=9c27caa6c48e99f11df4bcc927606f67',

    arraySerie:[],
    serieURL: 'https://api.themoviedb.org/3/search/tv?api_key=9c27caa6c48e99f11df4bcc927606f67',
    titleFilm:'',

    preURL:'https://image.tmdb.org/t/p/w342/',

    checkFilm: false,
    checkSerie: false,
});