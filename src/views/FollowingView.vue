<template>
    <main>
        <h2>Following</h2>
        <ul v-if="followingUsers.length > 0">
            <li v-for="id in followingUsers">
                <p>User #{{ id }}</p>
                <RouterLink :to="`/wishlist/${id}`">Wishlist</RouterLink>
                <RouterLink :to="`/collection/${id}`">Collection</RouterLink>
                <button type="button" @click="onUnfollowClick(id)">Unfollow</button>
            </li>
        </ul>
        <p v-else>You aren't following anyone, ask your friends to share their collection/wishlist and click follow</p>
    </main>
</template>

<script>
import GamesService from '@/services/GamesService';

export default {
    name: 'FollowingView',
    data() {
        return {
            gameService: new GamesService(),
            followingUsers: []
        }
    },
    created() {
        this.getFollowedUsers();
    },
    methods: {
        getFollowedUsers() {
            this.followingUsers = this.gameService.getFollowedUsers();
        },
        onUnfollowClick(id) {
            this.gameService.unfollow(id);
            this.getFollowedUsers();
        }
    }
}
</script>
<style scoped>
main {
    width: 80%;
    margin: 0 auto;
}
h2 {
    margin: 1em 0 .5em 0;
}
li {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 1em;
    margin-top: 1em;
}
li p {
    margin-right: auto;
}
</style>