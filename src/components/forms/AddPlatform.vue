<template>
    <form @submit="save">
        <h2>New Platform</h2>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Platform Name" v-model="newPlatform.name">
        <label for="date">Name</label>
        <input type="date" name="date" id="date" v-model="newPlatform.releaseDate">
        <label for="platform">Description</label>
        <textarea name="description" id="description" v-model="newPlatform.description"></textarea>
        <div class="buttons-container">
            <button title="Cancel" @click="close" type="button">Cancel</button>
            <button title="Save" type="submit" class="btn-attention">Save</button>
        </div>
    </form>
</template>

<script>
import DetailsService from '@/services/DetailsService';

export default {
    name: "AddPlatform",
    emits: ["close"],
    data() {
        return {
            newPlatform: {},
            detailsService: new DetailsService()
        }
    },
    methods: {
        close() {
            this.$emit("close");
        },
        save(e) {
            e.preventDefault();
            this.detailsService.addPlatform(this.newPlatform);
            this.close();
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
label {
    font-size: 1.2em;
}
textarea {
    resize: vertical
}
.buttons-container {
    display: flex;
    justify-content: end;
    gap: .5em;
    margin-top: 1em;
}
</style>