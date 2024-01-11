<script>
import { store } from '../store';

export default {
    name: "AppHeader",

    data() {
        return {
            store,
        }
    }


}

</script>

<template>
    <header>
        <div class="title">
            <h2>BOOLFLIX</h2>
        </div>

        <div class="searchBar">
            <input type="text" v-model.trim="store.titleFilm">
            <button @click.prevent="$emit('search')">Search</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;

header {
    background-color: black;
    color: $primary;
    @include flexCenter;
    padding: 40px;
}
</style>
