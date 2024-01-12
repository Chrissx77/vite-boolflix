<script>
export default {
    name: "AppCardSerie",
    props: {
        infoSerie: Object,
    }
}

</script>

<template>
    <div class="infoSerie">
        <div class="title">
            {{ infoSerie.name }}
        </div>
        <div class="titleOriginal">
            {{ infoSerie.original_name }}
        </div>

        <div v-if="infoSerie.original_language === 'it'">
            <img src="../assets/bandieraITA.jpg" alt="">
        </div>
        <div v-else-if="infoSerie.original_language === 'en'">
            <img src="../assets/bandieraEN.jpg" alt="">
        </div>
        <div v-else-if="infoSerie.original_language === 'us'">
            <img src="../assets/bandieraUSA.jpg" alt="">
        </div>
        <div v-else>
            <img src="../assets/bandieraARCOBALENO.jpg" alt="">
        </div>

        <div class="vote">
            {{ infoSerie.vote_average }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;

.infoSerie {
    border: 1px solid black;
    width: calc(100% / 2 - 10px);
    padding: 10px;

    div {
        img {
            width: 20px;
        }
    }
}
</style>