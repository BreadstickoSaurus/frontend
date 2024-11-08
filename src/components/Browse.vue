<template>
    <ul>
        <li v-for="item in items" @click="onItemClick(item)">
            <thumbnail :game-id="item.game_id" :alt="item.game_title"></thumbnail>
            <div class="titlebar">
                <p tooltip>{{ item.game_title }}</p>
            </div>
        </li>
    </ul>
</template>
<script>
import Thumbnail from './Thumbnail.vue';

export default {
    name: "Browse",
    components: {
        Thumbnail
    },
    emits: ["onItemClick"],
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
        }
    },
    methods: {
        onItemClick(item) {
            this.$emit("onItemClick", item)
        },
        async getThumbnail(item) {
            
        }
    }
}
</script>
<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
}
li {
    background-color: var(--color-background-mute);
    border-radius: 1em;
    overflow: hidden;
    cursor: pointer;
}
img {
    height: 25em;
    object-fit: cover;
}
li,img {
    max-width: 18em;
}
.titlebar {
    padding: .5em 1em;
}
p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
}
</style>