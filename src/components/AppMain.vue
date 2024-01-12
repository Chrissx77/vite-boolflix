<script>
// IMPORTO COMPONENTI
import AppCard from './AppCard.vue';
import AppCardSerie from './AppCard.vue';

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
        <h1 class="films">FILMS</h1>
        <div>
            <AppCard v-for="film in store.arrayFilms" :key="film.id" :info="film" />
        </div>
        <h1 class="serie">SERIE TV</h1>
        <div>
            <AppCardSerie v-for="serie in store.arraySerie" :key="serie.id" :infoSerie="serie" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;

main {
    background-color: #b1b1b1;
    min-height: 800px;
    padding: 30px;

    div {
        @include flexCenter;
        @include container;
        flex-wrap: wrap;
        gap: 10px;
    }

    .serie {
        margin-top: 50px;
    }
}
</style>
