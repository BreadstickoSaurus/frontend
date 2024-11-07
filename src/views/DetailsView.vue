<template>
  <main>
    <aside>
        <carousel :images="item.images"></carousel>
    </aside>
    <article>
        <div class="header-container">
            <h2>{{ item.title }}</h2>
            <i class="nf nf-fa-edit edit-button" @click="edit"></i>
        </div>
        <div class="detail-container" v-if="item.developer">
            <h3>developer</h3><p>{{ item.developer.name }}</p>
        </div>
        <div class="detail-container" v-if="item.publisher">
            <h3>publisher</h3><p>{{ item.publisher.name }}</p>
        </div>
        <div class="detail-container" v-if="item.releasedate">
            <h3>release date</h3><p>{{ item.releasedate }}</p>
        </div>
        <div class="detail-container" v-if="item.country">
            <h3>country of release</h3><p>{{ item.country }}</p>
        </div>
        <div class="detail-container" v-if="item.genre">
            <h3>genre</h3><p>{{ item.genre.name }}</p>
        </div>
        <div class="detail-container" v-if="item.platform">
            <h3>platform</h3><p>{{ item.platform.name }}</p>
        </div>
        <div class="detail-container" v-if="item.alttitles">
            <h3>alt titles</h3><ul><li v-for="title in item.alttitles">{{ title }}</li></ul>
        </div>
        <div class="detail-container" v-if="item.state">
            <h3>state</h3><p>{{ item.state }}</p>
        </div>
        <div class="description-container" v-if="item.description">
            <h3>description</h3><p>{{ item.description }}</p>
        </div>
    </article>
  </main>
</template>

<script>
import Carousel from '@/components/Carousel.vue';

export default {
    name: "DetailsView.vue",
    components: {
        Carousel
    },
    created() {
        this.fetchItemDetails();
    },
    data() {
        return {
            item: {}
        }
    },
    methods: {
        fetchItemDetails() {
            const id = this.$route.params.id;
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
                    name: {
                        code: "JP",
                        name: "Japan"
                    },
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
                    id: 1,
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
        edit() {
            this.$router.push({ name: 'edit', params: { id: this.$route.params.id } });
        }
    }
}
</script>
<style scoped>
aside, article {
    flex: 1 1 0;
    width: 0;
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
    aside, article {
        width: 100%;
    }
}
h2 {
    font-size: 2.5em;
}
h3 {
    font-size: 1.2em;
    text-transform: capitalize;
}
.detail-container {
    display: flex;
}
.detail-container:nth-child(even) {
    background-color: var(--color-background-soft);
}
.detail-container h3 {
    flex-basis: 8em;
}
.description-container {
    margin-top: 1em;
}
.edit-button {
    font-size: 1.5em;
    cursor: pointer;
}
.edit-button:hover {
    color: var(--color-highlight);
}
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>