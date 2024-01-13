<script>
import { info } from 'sass';
import { store } from '../store';

export default {
    name: "AppCardSerie",
    props: {
        infoSerie: Object,
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
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img :src="getPost(infoSerie.poster_path)" alt="" srcset="">
            </div>

            <div class="flip-card-back">
                <h2>
                    {{ infoSerie.name }}
                </h2>
                <p>
                    {{ infoSerie.original_name }}
                </p>
                <p class="info">
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
                </p>

                <div class="vote">
                    <i v-for="n in getRate(infoSerie.vote_average)" class="fa-solid fa-star"></i>
                    <i v-for="n in 5 - getRate(infoSerie.vote_average)" class="fa-regular fa-star"></i>
                </div>


            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../style/partials/mixins' as *;
@use '../style/partials/variable' as *;

/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */

.info {
    padding: 20px;
}

img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 3px 3px 20px black;

}

.flip-card {
    background-color: transparent;
    width: 300px;
    height: 450px;
    perspective: 1000px;
    /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.7s;
    transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    /* Safari */
    backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
    background-color: #bbb;
    color: black;
    border-radius: 10px;
    box-shadow: 3px 3px 20px black;
}

/* Style the back side */
.flip-card-back {
    border-radius: 10px;
    box-shadow: 3px 3px 20px black;
    background-color: white;
    color: black;
    transform: rotateY(180deg);
}
</style>