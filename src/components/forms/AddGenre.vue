<template>
    <form @submit="save">
        <h2>New Genre</h2>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Genre Name" v-model="newGenre">
        <div class="buttons-container">
            <button title="Cancel" @click="close" type="button">Cancel</button>
            <button title="Save" type="submit" class="btn-attention">Save</button>
        </div>
    </form>
</template>

<script>
import DetailsService from '@/services/DetailsService';

export default {
    name: "AddGenre",
    emits: ["close"],
    data() {
        return {
            newGenre: "",
            detailsService: new DetailsService()
        }
    },
    methods: {
        close() {
            this.$emit("close");
        },
        save(e) {
            e.preventDefault();
            this.detailsService.addGenre({name: this.newGenre});
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