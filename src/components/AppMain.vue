<script>
// IMPORTO COMPONENTI
import AppCard from './AppCard.vue';
import AppCardSerie from './AppCardSerie.vue';

// IMPORTO STORE
import { store } from '../store';

export default {
    name: "AppMain",
    components: {
        AppCard,
        AppCardSerie,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main>
        <!-- <div class="show" v-if="store.checkFilm === true && store.checkSerie === true"> -->
            <h1>FILMS:</h1>
            <div class="films">
                <AppCard v-for="film in store.arrayFilms" :key="film.id" :info="film" />
            </div>
            <h1>SERIE TV:</h1>
            <div class="serie">
                <AppCardSerie v-for="serie in store.arraySerie" :key="serie.id" :infoSerie="serie" />
            </div>
        <!-- </div> -->
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;

main {
    background-color: #b1b1b1;
    min-height: 800px;
    padding: 30px;

    .films {
        display: flex;
        flex-wrap: wrap;
        @include container;
        flex-wrap: wrap;
        gap: 10px;
    }

    .serie {
        margin-top: 50px;
        display: flex;
        flex-wrap: wrap;
        @include container;
        flex-wrap: wrap;
        gap: 10px;
    }
}
</style>
