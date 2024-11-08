<template>
  <main>
    <search-bar v-model:search="search"></search-bar>
    <p> {{ search }}</p>
    <browse :items="items" @on-item-click="onItemClick"></browse>
    <p>{{ message }}</p>
  </main>
</template>
<script>
import Browse from '@/components/Browse.vue';
import SearchBar from '@/components/SearchBar.vue';
import GamesService from '@/services/GamesService';
import LoginService from '@/services/LoginService';

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
            message: '',
            items: [],
            gameService: new GamesService()
        }
    },
    methods: {
        onItemClick(item) {
            this.$router.push({ name: 'details', params: { id: item.game_id } });
        },
        async fetchCollection() {
            const loginService = new LoginService();
            if(loginService.userId) {
                const response = await this.gameService.fetchCollection(loginService.userId);
                if (response.error)
                    this.message = "Your collection is empty";
                else
                    this.items = response;
            } else {
                this.message = "Please log in or register to view your collection";
            }
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