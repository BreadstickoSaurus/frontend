<template>
    <form @submit="save">
        <h2>New Developer</h2>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Developer Name" v-model="newDeveloper.name">
        <label for="country">Country</label>
        <select name="country" id="country" v-model="newDeveloper.countryCode">
            <option value="" disabled selected>Select Country</option>
            <option v-for="country in countries" :value="country.country_code">{{ country.country_name }}</option>
        </select>
        <label for="platform">Description</label>
        <textarea name="description" id="description" v-model="newDeveloper.description"></textarea>
        <div class="buttons-container">
            <button title="Cancel" @click="close" type="button">Cancel</button>
            <button title="Save" type="submit" class="btn-attention">Save</button>
        </div>
    </form>
</template>

<script>
import DetailsService from '@/services/DetailsService';

export default {
    name: "AddDeveloper",
    emits: ["close"],
    props: {
        countries: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            newDeveloper: {countryCode:""},
            detailsService: new DetailsService()
        }
    },
    methods: {
        close() {
            this.$emit("close");
        },
        save(e) {
            e.preventDefault();
            this.detailsService.addDeveloper(this.newDeveloper);
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