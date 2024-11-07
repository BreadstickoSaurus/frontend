<template>
    <main>
        <aside>
            <carousel :images="item.images"></carousel>
        </aside>
        <form @submit="onFormSubmit">
            <input name="title" id="title" v-model="newItem.title" type="text" placeholder="Title">
            <div class="detail-container">
                <label for="developer">developer</label>
                <select name="developer" id="developer" v-model="newItem.developer.id">
                    <option disabled value="">Select Developer</option>
                    <option v-for="developer in developers" :value="developer.developer_id">{{ developer.developer_name }}</option>
                </select>
                <button @click="addDeveloper" type="button">+</button>
            </div>
            <div class="detail-container">
                <label for="publisher">publisher</label>
                <select name="publisher" id="publisher" v-model="newItem.publisher.id">
                    <option disabled value="">Select Publisher</option>
                    <option v-for="publisher in publishers" :value="publisher.publisher_id">{{ publisher.publisher_name }}</option>
                </select>
                <button @click="addPublisher" type="button">+</button>
            </div>
            <div class="detail-container">
                <label for="releasedate">release date</label>
                <input name="releasedate" id="releasedate" type="date" v-model="newItem.releasedate">
            </div>
            <div class="detail-container">
                <label for="country">country</label>
                <select name="country" id="country" v-model="newItem.releasecountry.code">
                    <option disabled value="">Select Country</option>
                    <option v-for="country in countries" :value="country.country_code">{{ country.country_name }}</option>
                </select>
            </div>
            <div class="detail-container">
                <label for="genre">genre</label>
                <select name="genre" id="genre" v-model="newItem.genre.id">
                    <option disabled value="">Select Genre</option>
                    <option v-for="genre in genres" :value="genre.genre_id">{{ genre.genre_name }}</option>
                </select>
                <button @click="addGenre" type="button">+</button>
            </div>
            <div class="detail-container">
                <label for="platform">platform</label>
                <select name="platform" id="platform" v-model="newItem.platform.id">
                    <option disabled value="">Select Platform</option>
                    <option v-for="platform in platforms" :value="platform.platform_id">{{ platform.platform_name }}</option>
                </select>
                <button @click="addPlatform" type="button">+</button>
            </div>
            <div class="detail-container">
                <label for="alttitles">alt titles</label>
                <fieldset name="alttitles" id="alttitles">
                    <div v-for="(_, i) in newItem.alttitles" class="alt-title-container">
                        <input :name="'title-' + i" :id="'title-' + i" v-model="newItem.alttitles[i]" type="text">
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
                <select name="state" id="state" v-model="newItem.state">
                    <option disabled value="">Select State</option>
                    <option v-for="state in states" :value="state.state_name">{{ state.state_name }}</option>
                </select>
            </div>
            <div class="description-container">
                <label for="platform">description</label>
                <textarea @input="resizeTextArea" name="description" id="description" v-model="newItem.description"></textarea>
            </div>
            <div class="buttons-container">
                <button title="Delete" @click="delete" class="btn-warning" type="button">Delete</button>
                <button title="Cancel" @click="cancel" type="button">Cancel</button>
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
import Carousel from '@/components/Carousel.vue';
import AddDeveloper from '@/components/forms/AddDeveloper.vue';
import AddGenre from '@/components/forms/AddGenre.vue';
import AddPlatform from '@/components/forms/AddPlatform.vue';
import AddPublisher from '@/components/forms/AddPublisher.vue';
import Modal from '@/components/Modal.vue';
import DetailsService from '@/services/DetailsService';

export default {
    name: "EditView.vue",
    components: {
        Carousel,
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
                releasedate: "",
                releasecountry: {code: ""},
                genre: {id: ""},
                platform: {id: ""},
                alttitles: [],
                state: "",
                description: ""
            },
            detailsService: new DetailsService(),
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
        fetchItemDetails() {
            this.item = {
                gameid: 1,
                collectionid: 1,
                title: "Final Fantasy III",
                description: "Final Fantasy III is a role-playing video game developed and published by Square. It is known for introducing the job system, allowing players to customize their characters' abilities.",
                releasedate: "1990-04-27",
                state: "New",
                platform: {
                    id: 1,
                    name: "Famicom",
                    description: "The Famicom, also known as the Nintendo Entertainment System (NES) in North America, is an 8-bit home video game console developed by Nintendo.",
                    releasedate: "1983-07-15"
                },
                releasecountry: {
                    code: "JP",
                    name: "Japan"
                },
                publisher: {
                    id: 1,
                    name: "Square",
                    description: "Square was a Japanese video game company known for its iconic role-playing games, such as the Final Fantasy series. It later merged with Enix to become Square Enix.",
                    country: "Japan"
                },
                developer: {
                    id: 1,
                    name: "Square",
                    description: "Square was a Japanese video game developer known for producing the critically acclaimed Final Fantasy series and other RPG classics.",
                    country: {
                        code: "JP",
                        name: "Japan"
                    },
                },
                genre: {
                    id: 3,
                    name: "Role-Playing Game (RPG)"
                },
                wishlisted: false,
                alttitles: [
                    "ファイナルファンタジーIII",
                    "Final Fantasy III DS",
                    "Final Fantasy III Pixel Remaster"
                ],
                images: [
                    "https://i.etsystatic.com/17007874/r/il/0b6b1e/1915299738/il_1080xN.1915299738_db3m.jpg",
                    "https://cdn.mobygames.com/covers/1398118-final-fantasy-iii-snes-manual.jpg",
                    "https://www.lukiegames.com/assets/images/SNES/snes_final_fantasy_3_p_wgtfw8.jpg",
                    "https://commondatastorage.googleapis.com/images.pricecharting.com/ddde76e98ff152086493d94b01614ef9da0d87d81fbd82765d2954566d7e1cd8/1600.jpg",
                    "https://upload.wikimedia.org/wikipedia/en/8/86/Ff3cover.jpg",
                ]
            }
        },
        fillNewItem(id) {
            if (id) {
                this.fetchItemDetails();
                this.newItem = {...this.item}
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
            area.style.overflow = 'hidden';
            area.style.height = area.scrollHeight + 'px';
        },
        removeAltTitle(e, i) {
            this.newItem.alttitles.splice(i, 1);
        },
        addAltTitle(e) {
            if (this.newTitle !== "" && !this.newItem.alttitles.includes(this.newTitle)) {
                this.newItem.alttitles.push(this.newTitle);
                this.newTitle = "";
            }
        },
        onFormSubmit(e) {
            e.preventDefault();
        },
        delete() {
            return;
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
aside {
    width: fit-content;
    max-width: 100%;
    margin-bottom: 2em;
}
form>* {
    margin-bottom: .5em;
}
form {
    width: 100%;
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
.btn-warning{
    margin-right: auto;
}
</style>