<template>
  <main>
    <aside>
        <carousel :images="item.images"></carousel>
    </aside>
    <article>
        <div class="header-container">
            <h2>{{ item.game_title }}</h2>
            <i class="nf nf-fa-edit edit-button" @click="edit"></i>
        </div>
        <div class="detail-container" v-if="item.developer">
            <h3>developer</h3><p>{{ item.developer.name }}</p>
        </div>
        <div class="detail-container" v-if="item.publisher">
            <h3>publisher</h3><p>{{ item.publisher.name }}</p>
        </div>
        <div class="detail-container" v-if="item.releaseDate">
            <h3>release date</h3><p>{{ item.releaseDate }}</p>
        </div>
        <div class="detail-container" v-if="item.releaseCountry">
            <h3>country of release</h3><p>{{ item.releaseCountry.name }}</p>
        </div>
        <div class="detail-container" v-if="item.genre">
            <h3>genre</h3><p>{{ item.genre.name }}</p>
        </div>
        <div class="detail-container" v-if="item.platform">
            <h3>platform</h3><p>{{ item.platform.name }}</p>
        </div>
        <div class="detail-container" v-if="item.altTitles">
            <h3>alt titles</h3><ul><li v-for="title in item.altTitles">{{ title }}</li></ul>
        </div>
        <div class="detail-container" v-if="item.state">
            <h3>state</h3><p>{{ item.state.name }}</p>
        </div>
        <div class="description-container" v-if="item.game_description">
            <h3>description</h3><p>{{ item.game_description }}</p>
        </div>
    </article>
  </main>
</template>

<script>
import Carousel from '@/components/Carousel.vue';
import GamesService from '@/services/GamesService';

export default {
    name: "DetailsView.vue",
    components: {
        Carousel
    },
    created() {
        this.fetchItemDetails();
    },
    data() {
        return {
            item: {},
            gameService: new GamesService()
        }
    },
    methods: {
        async fetchItemDetails() {
            const id = this.$route.params.id;
            this.item = await this.gameService.fetchGameDetails(id);
        },
        edit() {
            this.$router.push({ name: 'edit', params: { id: this.$route.params.id } });
        }
    }
}
</script>
<style scoped>
aside, article {
    flex: 1 1 0;
    width: 0;
}
main {
    margin: 0 auto;
    display: flex;
    gap: 2em;
    margin-top: 1em;
    padding: 0 1em;
}
@media (max-width: 768px) {
    main {
        display: block;
    }
    aside, article {
        width: 100%;
    }
}
h2 {
    font-size: 2.5em;
}
h3 {
    font-size: 1.2em;
    text-transform: capitalize;
}
.detail-container {
    display: flex;
}
.detail-container:nth-child(even) {
    background-color: var(--color-background-soft);
}
.detail-container h3 {
    flex-basis: 8em;
}
.description-container {
    margin-top: 1em;
}
.edit-button {
    font-size: 1.5em;
    cursor: pointer;
}
.edit-button:hover {
    color: var(--color-highlight);
}
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.description-container p {
    overflow-wrap: break-word;
}
</style>