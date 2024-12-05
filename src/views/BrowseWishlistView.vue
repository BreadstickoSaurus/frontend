<template>
  <main>
    <div class="top-container">
        <search-bar v-model:search="search"></search-bar>
        <button v-if="this.loginService.userId" id="new" type="button" @click="addItem">Add Wish</button>
    </div>
    <p> {{ search }}</p>
    <browse :items="items" @on-item-click="onItemClick"></browse>
    <p>{{ message }}</p>
  </main>
</template>
<script>
import Browse from '@/components/Browse.vue';
import SearchBar from '@/components/SearchBar.vue';
import LoginService from '@/services/LoginService';
import WishlistService from '@/services/WishlistService';

export default {
    name: "BrowseCollectionView.vue",
    components: {
        Browse,
        SearchBar
    },
    created() {
        this.fetchWishlist();
    },
    data() {
        return {
            search: '',
            message: '',
            items: [],
            gameService: new WishlistService(),
            loginService: new LoginService()
        }
    },
    methods: {
        onItemClick(item) {
            this.$router.push({ name: 'details', params: { id: item.game_id } });
        },
        async fetchWishlist() {
            if(this.loginService.userId) {
                const response = await this.gameService.all(this.loginService.userId);
                if (response.error)
                    this.message = "Your wishlist is empty";
                else
                    this.items = response;
            } else {
                this.message = "Please log in or register to view your wishlist";
            }
        },
        addItem() {
            this.$router.push({name: 'new-wish'})
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
.top-container {
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
}
#new {
    position: absolute;
    right: 1em;
}
</style>