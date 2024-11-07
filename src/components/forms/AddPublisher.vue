<template>
    <form @submit="save">
        <h2>New Publisher</h2>
        <label for="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Publisher Name" v-model="newPublisher.name">
        <label for="country">Country</label>
        <select name="country" id="country" v-model="newPublisher.countryCode">
            <option value="" disabled selected>Select Country</option>
            <option v-for="country in countries" :value="country.country_code">{{ country.country_name }}</option>
        </select>
        <label for="platform">Description</label>
        <textarea name="description" id="description" v-model="newPublisher.description"></textarea>
        <div class="buttons-container">
            <button title="Cancel" @click="close" type="button">Cancel</button>
            <button title="Save" type="submit" class="btn-attention">Save</button>
        </div>
    </form>
</template>

<script>
import DetailsService from '@/services/DetailsService';

export default {
    name: "AddPublisher",
    emits: ["close"],
    props: {
        countries: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            newPublisher: {countryCode:""},
            detailsService: new DetailsService()
        }
    },
    methods: {
        close() {
            this.$emit("close");
        },
        save(e) {
            e.preventDefault();
            this.detailsService.addPublisher(this.newPublisher);
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