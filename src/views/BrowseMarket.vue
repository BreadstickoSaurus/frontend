<template>
<main>
    <div class="top-container">
        <search-bar v-model:search="search" v-on:update:search="updateSearch"></search-bar>
        <div class="semanic-search-toggle">
            <toggle-switch v-model="semanticSearch"></toggle-switch>
            <span class="label">
                Semantic search
                <tooltip>
                    <i class="nf nf-seti-info"></i>
                    <template #tooltip>
                        Semantic Search uses AI to understand the meaning behind your query, focusing on context and intent rather than just matching keywords. This helps deliver more accurate and relevant results, even if the exact terms aren't mentioned in the data.
                    </template>
                </tooltip>
            </span>
        </div>
    </div>
    <browse :items="items" @on-item-click="onItemClick"></browse>
    <p>{{ message }}</p>
</main>
</template>
<script>
import Browse from '@/components/Browse.vue';
import SearchBar from '@/components/SearchBar.vue';
import ToggleSwitch from '@/components/ToggleSwitch.vue';
import Tooltip from '@/components/Tooltip.vue';
import WishlistService from '@/services/WishlistService';

export default {
    name: "BrowseMarket.vue",
    components: {
        Browse,
        SearchBar,
        ToggleSwitch,
        Tooltip
    },
    created() {
        this.fetchWishes();
    },
    data() {
        return {
            search: '',
            message: '',
            items: [],
            wishlistService: new WishlistService(),
            semanticSearch: true
        }
    },
    methods: {
        onItemClick(item) {
            this.$router.push({ name: 'details', params: { id: item.game_id } });
        },
        async fetchWishes() {
            const searchMethod = this.semanticSearch ? this.wishlistService.semanticSearch : this.wishlistService.search
            const response = await searchMethod(this.search);
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
    gap: 2em;
    margin-top: 1em;
}
.semanic-search-toggle {
    display: flex;
    gap: 1em;
    align-items: center;
    position: absolute;
    right: 1em;
}
.semanic-search-toggle > *{
    flex: 0 0 auto;
}
.top-container {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    gap: 1em;
}
@media (max-width: 800px) {
    .semanic-search-toggle {
        position: relative;
    }
}
</style>