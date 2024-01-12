<script>
import { info } from 'sass';
import { store } from '../store';

export default {
    name: "AppCardSerie",
    props: {
        infoSerie: Object,
    },

    data(){
        return{
            store,
        }
    },

    methods:{
        getPost(post){
            return  `${store.preURL}${post}`
        }
    }
}

</script>

<template>
    <div class="infoSerie">

        <div class="image">
            <img :src="getPost(infoSerie.poster_path)"
            alt="" srcset="">
        </div>

        <div class="description">
            <div class="title">
                {{ infoSerie.name }}
            </div>
            <div class="titleOriginal">
                {{ infoSerie.original_name }}
            </div>
    
            <div class="flag" v-if="infoSerie.original_language === 'it'">
                <img src="../assets/bandieraITA.jpg" alt="">
            </div>
            <div class="flag" v-else-if="infoSerie.original_language === 'en'">
                <img src="../assets/bandieraEN.jpg" alt="">
            </div>
            <div class="flag" v-else-if="infoSerie.original_language === 'us'">
                <img src="../assets/bandieraUSA.jpg" alt="">
            </div>
            <div class="flag" v-else>
                <img src="../assets/bandieraARCOBALENO.jpg" alt="">
            </div>
    
            <div class="vote">
                {{ infoSerie.vote_average }}
            </div>
        </div>

        
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;

.infoSerie {
    width: calc(100% / 5  - 10px);
    padding: 10px;

    .image{
        img{
            width: 100%;
        }
    }

    .flag {
        img {
            width: 20px;
        }
    }

    .description{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
}
</style>