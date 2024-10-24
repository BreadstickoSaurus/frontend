<template>
    <div class="search-container">
        <input type="text" :value="search" @input="updateSearch" placeholder="Search...">
        <button type="button" @click="clearSearch" title="Clear" v-if="showClear">
            <i class="nf nf-fa-close"></i>
        </button>
        <button title="Clear" v-else>
            <i class="nf nf-fa-search"></i>
        </button>
    </div>
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
            showClear: false,
        }
    },
    methods: {
        clearSearch() {
            this.showClear = false;
            this.$emit('update:search', '');
        },
        updateSearch(e) {
            this.showClear = e.target.value === "" ? false : true;
            this.$emit('update:search', e.target.value);
        }
    }
}
</script>
<style scoped>
input {
    border-radius: .25em 0 0 .25em;
}
input:focus {
    outline: 0;
}
button {
    border-radius: 0 .25em .25em 0;
}
</style>