<script>
import { store } from '../store';

export default {
    name: "AppCard",
    props: {
        info: Object,
    },

    data() {
        return {
            store,
        }
    },

    methods: {
        getPost(post) {
            return `${store.preURL}${post}`
        },

        getRate(num) {
            return Math.ceil(num / 2);
        }
    }

}

</script>

<template>
    <div class="infoFilm">


        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img :src="getPost(info.poster_path)" alt="" srcset="">
                </div>
                <div class="flip-card-back">
                    <div class="title">
                        {{ info.title }}
                    </div>
                    <div class="titleOriginal">
                        {{ info.original_title }}
                    </div>

                    <div class="flag" v-if="info.original_language === 'it'">
                        <img src="../assets/bandieraITA.jpg" alt="">
                    </div>
                    <div class="flag" v-else-if="info.original_language === 'en'">
                        <img src="../assets/bandieraEN.jpg" alt="">
                    </div>
                    <div class="flag" v-else-if="info.original_language === 'us'">
                        <img src="../assets/bandieraUSA.jpg" alt="">
                    </div>
                    <div v-else class="flag">
                        <img src="../assets/bandieraARCOBALENO.jpg" alt="">
                    </div>

                    <div class="vote">
                        <i v-for="n in getRate(info.vote_average)" class="fa-solid fa-star"></i>
                        <i v-for="n in 5 - getRate(info.vote_average)" class="fa-regular fa-star"></i>
                    </div>

                </div>
            </div>
        </div>





















        <!-- <div class="wrap">
            <div class="image">
                <img :src="getPost(info.poster_path)" alt="" srcset="">
            </div>
    
            <div class="description">
                <div class="title">
                    {{ info.title }}
                </div>
                <div class="titleOriginal">
                    {{ info.original_title }}
                </div>
    
                <div class="flag" v-if="info.original_language === 'it'">
                    <img src="../assets/bandieraITA.jpg" alt="">
                </div>
                <div class="flag" v-else-if="info.original_language === 'en'">
                    <img src="../assets/bandieraEN.jpg" alt="">
                </div>
                <div class="flag" v-else-if="info.original_language === 'us'">
                    <img src="../assets/bandieraUSA.jpg" alt="">
                </div>
                <div v-else class="flag">
                    <img src="../assets/bandieraARCOBALENO.jpg" alt="">
                </div>
    
                <div class="vote">
                    <i v-for="n in getRate(info.vote_average)" class="fa-solid fa-star"></i>
                    <i v-for="n in 5 - getRate(info.vote_average)" class="fa-regular fa-star"></i>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;




.infoFilm {
    width: calc(100% / 5 - 10px);
    padding: 10px;

    .flip-card-front {
        img {
            width: 100%;
        }
    }

    .flag {
        img {
            width: 20px;
        }
    }

    .flip-card-inner {
        position: relative;

    }

    .flip-card-back {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 0;
        padding: 20px;
        background-color: white;
        width: 100%;
        height: 100%;
        display: none;
    }

    

}
</style>
