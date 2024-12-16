<template>
  <main>
    <div class="top-container">
        <button v-if="this.$route.params.id" id="follow" type="button" @click="onFollowClick">Follow</button>
        <button v-else-if="this.loginService.userId" id="share" type="button" @click="onShareClick">Share</button>
        <button v-if="this.loginService.userId" id="new" type="button" @click="addItem">Add Game</button>
    </div>
    <browse :items="items" @on-item-click="onItemClick"></browse>
    <p>{{ message }}</p>
  </main>
</template>
<script>
import Browse from '@/components/Browse.vue';
import SearchBar from '@/components/SearchBar.vue';
import GamesService from '@/services/GamesService';
import { share } from '@/services/helper';
import LoginService from '@/services/LoginService';

export default {
    name: "BrowseCollectionView.vue",
    components: {
        Browse,
        SearchBar
    },
    created() {
        if (this.$route.params.id)
            this.fetchOtherCollection();
        else
            this.fetchUserCollection();
    },
    data() {
        return {
            search: '',
            message: '',
            items: [],
            gameService: new GamesService(),
            loginService: new LoginService()
        }
    },
    methods: {
        onItemClick(item) {
            this.$router.push({ name: 'details', params: { id: item.game_id } });
        },
        async fetchUserCollection() {
            if(this.loginService.userId) {
                const response = await this.gameService.all(this.loginService.userId);
                if (response.error)
                    this.message = "Your collection is empty";
                else
                    this.items = response;
            } else {
                this.message = "Please log in or register to view your collection";
            }
        },
        async fetchOtherCollection() {
            const response = await this.gameService.all(this.$route.params.id);
            if (response.error)
                this.message = "This user doesn't exist, or their collection is empty";
            else
                this.items = response;
        },
        addItem() {
            this.$router.push('new');
        },
        async onShareClick() {
            await share(`${this.$route.fullPath}/${this.loginService.userId}`, `Collection app collection`);
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
    display: flex;
    justify-content: flex-end;
    width: 100%;
    gap: 1em;
    padding-right: 2em;
    box-sizing: border-box;
}
</style>