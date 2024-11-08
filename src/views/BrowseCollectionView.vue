<template>
  <main>
    <search-bar v-model:search="search"></search-bar>
    <p> {{ search }}</p>
    <browse :items="items" @on-item-click="onItemClick"></browse>
  </main>
</template>
<script>
import Browse from '@/components/Browse.vue';
import SearchBar from '@/components/SearchBar.vue';
import GamesService from '@/services/GamesService';

export default {
    name: "BrowseCollectionView.vue",
    components: {
        Browse,
        SearchBar
    },
    created() {
        this.fetchCollection();
    },
    data() {
        return {
            search: '',
            items: [],
            gameService: new GamesService()
        }
    },
    methods: {
        onItemClick(item) {
            this.$router.push({ name: 'details', params: { id: item.game_id } });
        },
        async fetchCollection() {
            this.items = await this.gameService.fetchCollection();
        }
    }
}
</script>
<style scoped>
main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    margin-top: 1em;
}
</style>