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
        <h1 v-if="store.arrayFilms.length === 0">Fai la tua prima ricerca...</h1>
        <div class="show" v-if="store.arrayFilms.length > 0">
            <h1>FILMS:</h1>
            <div class="films">
                <AppCard v-for="film in store.arrayFilms" :key="film.id" :info="film" />
            </div>

            <h1>SERIE TV:</h1>
            <div class="serie">
                <AppCardSerie v-for="serie in store.arraySerie" :key="serie.id" :infoSerie="serie" />
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;

h1 {
    padding: 20px;
}

main {
    background-color: rgb(59, 59, 59);
    min-height: 800px;
    padding: 30px;

    .films {
        @include container;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }

    .serie {
        @include container;
        margin-top: 50px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;
    }
}
</style>
