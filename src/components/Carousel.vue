<template>
    <splide id="main-splide" :options="mainOptions" ref="main">
        <splide-slide v-for="url in images" :key="url">
            <img :src="url" :alt="url">
        </splide-slide>
    </splide>
    <splide id="thumbnail-splide" :options="thumbsOptions" ref="thumbs">
        <splide-slide v-for="url in images" :key="url">
            <img :src="url" :alt="url">
        </splide-slide>
    </splide>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { onMounted, ref } from 'vue';

export default {
    name: "Carousel",
    components: {
        Splide,
        SplideSlide
    },
    props: {
        images: {
            type: Array,
            required: true
        }
    },
    setup() {
        const main = ref(null);
        const thumbs = ref(null);

        const mainOptions = {
            type: 'fade',
            rewind: true,
            perMove: 1,
            gap: '1rem',
            pagination: false
        };
        const thumbsOptions = {
            type: 'slide',
            rewind: true,
            gap: '1rem',
            pagination: false,
            fixedWidth: 110,
            fixedHeight: 70,
            cover: true,
            isNavigation: true,
            updateOnMove: true,
            arrows: false,
            breakpoints : {
                768: {
                    // fixedWidth  : 66,
                    // fixedHeight : 38,
                    gap: '.5em'
                },
            },
        };

        onMounted(() => {
            const thumbsSplide = thumbs.value?.splide;

            if (thumbsSplide) {
                main.value?.sync(thumbsSplide);
            }
        });
        return {
            main,
            thumbs,
            mainOptions,
            thumbsOptions
        };
    }
}
</script>
<style>
#thumbnail-splide .splide__slide {
    opacity: 0.6;
}
#thumbnail-splide .splide__slide.is-active {
    opacity: 1;
    border: 1px solid var(--color-highlight);
}
.splide__slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    max-height: 40em;
}
#thumbnail-splide-list {
    justify-content: center;
}
#main-splide {
    margin-bottom: 1em;
}
</style>