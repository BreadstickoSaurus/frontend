<script setup>
</script>

<template>
  <main>
    <aside><img src="/404.png" alt="404"></aside>
    <article>
        <h2>{{ item.title }}</h2>
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
export default {
  name: "DetailsView.vue",
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
            ]
        }

    }
  }
}
</script>
<style scoped>
aside {
    width: 500px;
}
aside img {
    width: 100%;
}
main {
  margin: 0 auto;
  display: flex;
  gap: 1em;
  margin-top: 1em;
}
@media (max-width: 768px) {
    main {
        display: block;
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
.detail-container h3 {
    flex-basis: 8em;
}
.description-container {
    margin-top: 1em;
}
</style>