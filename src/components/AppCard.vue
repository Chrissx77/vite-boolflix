<script>
export default {
    name: "AppCard",
    props: {
        info: Object,
    }
}

</script>

<template>
    <div class="infoFilm">
        <div class="title">
            {{ info.title }}
        </div>
        <div class="titleOriginal">
            {{ info.original_title }}
        </div>
        <div class="lang">
            {{ info.original_language }}
        </div>
        <div class="vote">
            {{ info.vote_average }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;

.infoFilm {
    border: 1px solid black;
    width: calc(100% / 1 - 10px);
    padding: 10px;

}
</style>
