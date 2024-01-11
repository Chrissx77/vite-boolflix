<script>
// IMPORTO COMPONENTI
import AppCard from './AppCard.vue';

// IMPORTO STORE
import { store } from '../store';

export default {
    name: "AppMain",
    components: {
        AppCard,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div>
        <AppCard v-for="film in store.arrayFilms" :key="film.id" :info="film" />
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;

div{
    @include flexCenter;
    @include container;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 10px;
}
</style>
