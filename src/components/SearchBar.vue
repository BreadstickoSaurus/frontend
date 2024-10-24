<template>
    <form class="search-container" @submit="submitSearch">
        <input type="text" v-model="searchString" placeholder="Search...">
        <span class="button-container">
            <button id="clear" type="button" @click="clearSearch" title="Clear" v-if="searchString">
                <i class="nf nf-fa-close"></i>
            </button>
            <button id="search" type="submit" title="Search">
                <i class="nf nf-fa-search"></i>
            </button>
        </span>
    </form>
</template>
<script>
export default {
    name: 'SearchBar',
    emits: ['update:search'],
    props: {
        search: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            searchString: ''
        }
    },
    methods: {
        clearSearch() {
            this.searchString = '';
            this.$emit('update:search', '');
        },
        submitSearch(e) {
            e.preventDefault();
            this.$emit('update:search', this.searchString);
        }
    }
}
</script>
<style scoped>
.search-container {
    --r: 2em;
    position: relative;
    width: fit-content;
    width: 30em;
    max-width: 100vw;
    padding: 0 1em
}
.button-container {
    padding-right: 1em;
    position: absolute;
    right: 0;
}
input {
    border-radius: var(--r);
    padding-left: 1em;
    width: 100%;
}
input:focus {
    outline: var(--color-highlight) solid 1px;
}
#search {
    border-radius: 0 var(--r) var(--r) 0;
    padding-right: 1em;
}
input, button {
    background-color: var(--color-background-mute);
    color: var(--color-text);
}
input:hover, button:hover {
    background-color: var(--color-background-soft);
}
#clear {
    border-radius: 0;
}
</style>