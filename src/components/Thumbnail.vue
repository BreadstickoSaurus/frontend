<template>
    <img :src="url" :alt="alt">
</template>

<script>
import GamesService from '@/services/GamesService';

export default {
    props: {
        gameId: {
            type: Number,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            gameService: new GamesService(),
            url : ""
        }
    },
    created() {
        this.getUrl();
    },
    methods: {
        async getUrl() {
            const images = await this.gameService.fetchImages(this.gameId);
            this.url = images.find(Boolean) || "/404.png";
        }
    }
}
</script>