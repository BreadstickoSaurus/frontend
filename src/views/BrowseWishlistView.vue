<template>
  <main>
    <div class="top-container">
        <search-bar v-model:search="search"></search-bar>
        <button v-if="this.$route.params.id" id="follow" type="button" @click="onFollowClick">Follow</button>
        <button v-else-if="this.loginService.userId" id="share" type="button" @click="onShareClick">Share</button>
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
import { share } from '@/services/helper';
import LoginService from '@/services/LoginService';
import WishlistService from '@/services/WishlistService';

export default {
    name: "BrowseCollectionView.vue",
    components: {
        Browse,
        SearchBar
    },
    created() {
        if (this.$route.params.id)
            this.fetchOtherWishlist();
        else
            this.fetchUserWishlist();
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
        async fetchUserWishlist() {
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
        
        async fetchOtherWishlist() {
            const response = await this.gameService.all(this.$route.params.id);
            if (response.error)
                this.message = "This user doesn't exist, or their wishlist is empty";
            else
                this.items = response;
        },
        addItem() {
            this.$router.push({name: 'new-wish'});
        },
        async onShareClick() {
            await share(`${this.$route.fullPath}/${this.loginService.userId}`, `Collection app wishlist`);
        },
        onFollowClick() {
            this.gameService.follow(this.$route.params.id);
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