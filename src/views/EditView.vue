<template>
    <main>
        <aside>
            <image-picker :old-images="item.images" ref="picker"></image-picker>
        </aside>
        <form @submit="onFormSubmit" id="editform">
            <input name="title" id="title" v-model="newItem.game_title" type="text" placeholder="Title" required>
            <div class="detail-container">
                <label for="developer">developer</label>
                <select name="developer" id="developer" v-model="newItem.developer.id" required>
                    <option disabled value="">Select Developer</option>
                    <option v-for="developer in developers" :value="developer.developer_id" :key="developer.developer_id">{{ developer.developer_name }}</option>
                </select>
                <button @click="addDeveloper" type="button">+</button>
            </div>
            <div class="detail-container">
                <label for="publisher">publisher</label>
                <select name="publisher" id="publisher" v-model="newItem.publisher.id" required>
                    <option disabled value="">Select Publisher</option>
                    <option v-for="publisher in publishers" :value="publisher.publisher_id" :key="publisher.publisher_id">{{ publisher.publisher_name }}</option>
                </select>
                <button @click="addPublisher" type="button">+</button>
            </div>
            <div class="detail-container">
                <label for="releasedate">release date</label>
                <input name="releasedate" id="releasedate" type="date" v-model="newItem.releaseDate" required>
            </div>
            <div class="detail-container">
                <label for="country">country</label>
                <select name="country" id="country" v-model="newItem.releaseCountry.code" required>
                    <option disabled value="">Select Country</option>
                    <option v-for="country in countries" :value="country.country_code" :key="country.country_code">{{ country.country_name }}</option>
                </select>
            </div>
            <div class="detail-container">
                <label for="genre">genre</label>
                <select name="genre" id="genre" v-model="newItem.genre.id" required>
                    <option disabled value="">Select Genre</option>
                    <option v-for="genre in genres" :value="genre.genre_id" :key="genre.genre_id">{{ genre.genre_name }}</option>
                </select>
                <button @click="addGenre" type="button">+</button>
            </div>
            <div class="detail-container">
                <label for="platform">platform</label>
                <select name="platform" id="platform" v-model="newItem.platform.id" required>
                    <option disabled value="">Select Platform</option>
                    <option v-for="platform in platforms" :value="platform.platform_id" :key="platform.platform_id">{{ platform.platform_name }}</option>
                </select>
                <button @click="addPlatform" type="button">+</button>
            </div>
            <div class="detail-container">
                <label for="alttitles">alt titles</label>
                <fieldset name="alttitles" id="alttitles">
                    <div v-for="(_, i) in newItem.altTitles" class="alt-title-container" :key="i">
                        <input :name="'title-' + i" :id="'title-' + i" v-model="newItem.altTitles[i]" type="text">
                        <button title="Add alt title" @click="(e) => removeAltTitle(e, i)" type="button"><i class="nf nf-fa-close"></i></button>
                    </div>
                    <div class="alt-title-container">
                        <input name="newtitle" id="newtitle" v-model="newTitle" type="text" placeholder="Add alt title">
                        <button title="Add alt title" @click="addAltTitle" type="button"><i class="nf nf-fa-check"></i></button>
                    </div>
                </fieldset>
            </div>
            <div class="detail-container">
                <label for="state">state</label>
                <select name="state" id="state" v-model="newItem.state.id" required>
                    <option disabled value="">Select State</option>
                    <option v-for="state in states" :value="state.state_id" :key="state.state_id">{{ state.state_name }}</option>
                </select>
            </div>
            <div class="description-container">
                <label for="platform">description</label>
                <textarea @input="resizeTextArea" name="description" id="description" v-model="newItem.game_description" required    ></textarea>
            </div>
            <div class="buttons-container">
                <button v-if="$route.params.id" title="Delete" @click="deleteGame" class="btn-warning" type="button">Delete</button>
                <button title="Cancel" @click="cancel" type="button" id="cancel">Cancel</button>
                <button title="Save" type="submit" class="btn-attention">Save</button>
            </div>
        </form>
    </main>
    <modal :visible="modalVisible" @close="modalClose">
        <add-developer v-if="modalContents === 'dev'" @close="modalClose" :countries="countries"></add-developer>
        <add-publisher v-if="modalContents === 'pub'" @close="modalClose" :countries="countries"></add-publisher>
        <add-genre v-if="modalContents === 'gen'" @close="modalClose"></add-genre>
        <add-platform v-if="modalContents === 'pla'" @close="modalClose"></add-platform>
    </modal>
</template>

<script>
import AddDeveloper from '@/components/forms/AddDeveloper.vue';
import AddGenre from '@/components/forms/AddGenre.vue';
import AddPlatform from '@/components/forms/AddPlatform.vue';
import AddPublisher from '@/components/forms/AddPublisher.vue';
import ImagePicker from '@/components/ImagePicker.vue';
import Modal from '@/components/Modal.vue';
import DetailsService from '@/services/DetailsService';
import GamesService from '@/services/GamesService';

export default {
    name: "EditView.vue",
    components: {
        ImagePicker,
        Modal,
        AddDeveloper,
        AddPublisher,
        AddGenre,
        AddPlatform
    },
    created() {
        const id = this.$route.params.id;
        this.fillNewItem(id);
        this.fetchOptionData();
    },
    data() {
        return {
            item: {},
            newItem: {
                developer: {id: ""},
                publisher: {id: ""},
                releaseCountry: {code: ""},
                genre: {id: ""},
                platform: {id: ""},
                altTitles: [],
                state: {id: ""},
            },
            detailsService: new DetailsService(),
            gameService: new GamesService(),
            developers: [],
            publishers: [],
            countries: [],
            genres: [],
            platforms: [],
            states: [],
            newTitle: "",
            modalVisible: false,
            modalContents: null
        }
    },
    methods: {
        async fillNewItem(id) {
            if (id) {
                this.item = await this.gameService.details(id);
                this.newItem = JSON.parse(JSON.stringify(this.item)); //deep copy
                this.resizeTextArea();
            }
        },
        async fetchOptionData() {
            this.developers = await this.detailsService.fetchDevelopers();
            this.publishers = await this.detailsService.fetchPublishers();
            this.countries = await this.detailsService.fetchCountries();
            this.genres = await this.detailsService.fetchGenres();
            this.platforms = await this.detailsService.fetchPlatforms();
            this.states = await this.detailsService.fetchStates();
        },
        resizeTextArea() {
            const area = document.querySelector('textarea');
            area.style.height = area.scrollHeight + 'px';
        },
        removeAltTitle(e, i) {
            this.newItem.altTitles.splice(i, 1);
        },
        addAltTitle(e) {
            if (this.newTitle !== "" && !this.newItem.altTitles.includes(this.newTitle)) {
                this.newItem.altTitles.push(this.newTitle);
                this.newTitle = "";
            }
        },
        async onFormSubmit(e) {
            e.preventDefault();
            let id = this.$route.params.id;
            if (id) {
                this.gameService.updateGame(this.formatNewItem(), id);
                const removedTitles = this.item.altTitles.filter(e => !this.newItem.altTitles.includes(e));
                if (removedTitles.length)
                    this.gameService.removeAltTitles(removedTitles, id);
            } else {
                const response = await this.gameService.addGame(this.formatNewItem());
                id = await response.gameId;
            }
            
            this.submitImages(id);
            const newTitles = this.item.altTitles ? this.newItem.altTitles.filter(e => !this.item.altTitles.includes(e)) : this.newItem.altTitles;
            if (newTitles.length)
                this.gameService.addAltTitles(newTitles, id);

            this.$router.push({name: 'details', params: {id: id}});
        },
        submitImages(gameId) {
            const newImages = this.$refs.picker.getNewImageFormData();
            const removedImages = this.$refs.picker.removedImages;
            if(newImages.has('pictures[]'))
                this.gameService.addImages(newImages, gameId);
            if(Array.isArray(removedImages) && removedImages.length)
                removedImages.forEach(i => this.gameService.removeImage(i, gameId));
        },
        formatNewItem() {
            return {
                title: this.newItem.game_title,
                description: this.newItem.game_description,
                releaseDate: this.newItem.releaseDate,
                stateId: this.newItem.state.id,
                platformId: this.newItem.platform.id,
                ReleaseCountryCode: this.newItem.releaseCountry.code,
                publisherID: this.newItem.publisher.id,
                developerID: this.newItem.developer.id,
                genreId: this.newItem.genre.id
            };
        },
        deleteGame() {
            const id = this.$route.params.id;
            this.gameService.deleteGame(id);
            this.$router.push({name: 'collection'});
        },
        cancel() {
            this.$router.back();
        },
        modalClose() {
            this.fetchOptionData();
            this.modalVisible = false;
        },
        addDeveloper() {
            this.modalContents = 'dev';
            this.modalVisible = true;
        },
        addPublisher() {
            this.modalContents = 'pub';
            this.modalVisible = true;
        },
        addGenre() {
            this.modalContents = 'gen';
            this.modalVisible = true;
        },
        addPlatform() {
            this.modalContents = 'pla';
            this.modalVisible = true;
        },
    }
}
</script>
<style scoped>
aside, #editform {
    flex: 1 1 0;
    width: 0;
}
#editform>* {
    margin-bottom: .5em;
}
main {
    margin: 0 auto;
    display: flex;
    gap: 2em;
    margin-top: 1em;
    padding: 0 1em;
}
@media (max-width: 768px) {
    main {
        display: block;
    }
    aside, #editform {
        width: 100%;
        margin-bottom: 2em;
    }
}
#title {
    font-size: 2.5em;
    padding: .2em;
    width: 100%;
}
label {
    font-size: 1.2em;
    text-transform: capitalize;
    flex-shrink: 0;
}
.detail-container {
    display: flex;
}
.detail-container label {
    flex-basis: 8em;
}
.description-container {
    margin-top: 1em;
}
textarea {
    display: block;
    width: 100%;
    resize: vertical;
}
.detail-container>button {
    font-size: 1.5em;
    padding: 0 .4em;
    margin-left: .5em;
}
.detail-container input,select,fieldset {
    flex-grow: 1;
}
select {
    width: 100%;
}
fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: .5em;
}
.alt-title-container {
    position: relative;
}
fieldset button {
    position: absolute;
    right: 0;
}
fieldset input {
    width: 100%;
    padding-right: 3em;
}
.buttons-container {
    display: flex;
    gap: .5em;
    margin-top: 1em;
}
#cancel{
    margin-left: auto;
}
</style>