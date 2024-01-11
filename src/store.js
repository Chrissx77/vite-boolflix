import {reactive} from vue;

export const store = reactive({
    arrayFilms: [],
    movieURL: 'https://api.themoviedb.org/3/search/movie?api_key=9c27caa6c48e99f11df4bcc927606f67',

});