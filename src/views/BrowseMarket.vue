<template>
<main>
    <search-bar v-model:search="search" v-on:update:search="updateSearch"></search-bar>
    <browse :items="items" @on-item-click="onItemClick"></browse>
    <p>{{ message }}</p>
</main>
</template>
<script>
import Browse from '@/components/Browse.vue';
import SearchBar from '@/components/SearchBar.vue';
import WishlistService from '@/services/WishlistService';

export default {
    name: "BrowseMarket.vue",
    components: {
        Browse,
        SearchBar
    },
    created() {
        this.fetchWishes();
    },
    data() {
        return {
            search: '',
            message: '',
            items: [],
            wishlistService: new WishlistService()
        }
    },
    methods: {
        onItemClick(item) {
            this.$router.push({ name: 'details', params: { id: item.game_id } });
        },
        async fetchWishes() {
            const response = await this.wishlistService.search(this.search);
            if (response.error)
                this.message = "No wishes found";
            else
                this.items = response;
        },
        updateSearch() {
            this.fetchWishes();
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