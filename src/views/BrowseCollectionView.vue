<script setup>
import Browse from '@/components/Browse.vue';
import SearchBar from '../components/SearchBar.vue';
</script>

<template>
  <main>
    <search-bar v-model:search="search"></search-bar>
    <p> {{ search }}</p>
    <browse :items="items" @on-item-click="onItemClick"></browse>
  </main>
</template>
<script>
export default {
  name: "HomeView.vue",
  data() {
    return {
      search: '',
      items: [
        { "title": "Final Fantasy", "release_date": "18/12/1987" },
        { "title": "Final Fantasy II", "release_date": "17/12/1988" },
        { "title": "Final Fantasy III", "release_date": "27/04/1990" },
        { "title": "Final Fantasy IV", "release_date": "19/07/1991" },
        { "title": "Final Fantasy V", "release_date": "06/12/1992" },
        { "title": "Final Fantasy VI", "release_date": "02/04/1994" },
        { "title": "Final Fantasy VII", "release_date": "31/01/1997" },
        { "title": "Final Fantasy VIII", "release_date": "11/02/1999" },
        { "title": "Final Fantasy IX", "release_date": "07/07/2000" },
        { "title": "Final Fantasy X", "release_date": "19/07/2001" },
        { "title": "Final Fantasy XI", "release_date": "16/05/2002" },
        { "title": "Final Fantasy XII", "release_date": "16/03/2006" },
        { "title": "Final Fantasy XIII", "release_date": "17/12/2009" },
        { "title": "Final Fantasy XIV", "release_date": "30/09/2010" },
        { "title": "Final Fantasy XV", "release_date": "29/11/2016" },
        { "title": "Final Fantasy XVI", "release_date": "22/06/2023" },

        { "title": "Final Fantasy Tactics", "release_date": "20/06/1997" },
        { "title": "Final Fantasy Tactics Advance", "release_date": "14/02/2003" },
        { "title": "Final Fantasy Tactics A2: Grimoire of the Rift", "release_date": "25/10/2007" },
        { "title": "Final Fantasy Crystal Chronicles", "release_date": "08/08/2003" },
        { "title": "Final Fantasy Crystal Chronicles: Ring of Fates", "release_date": "23/08/2007" },
        { "title": "Final Fantasy Crystal Chronicles: Echoes of Time", "release_date": "29/01/2009" },
        { "title": "Final Fantasy Crystal Chronicles: The Crystal Bearers", "release_date": "12/11/2009" },
        { "title": "Final Fantasy Mystic Quest", "release_date": "05/10/1992" },
        { "title": "Final Fantasy: The 4 Heroes of Light", "release_date": "29/10/2009" },
        { "title": "Final Fantasy Type-0", "release_date": "27/10/2011" },
        { "title": "Final Fantasy Type-0 HD", "release_date": "17/03/2015" },
        { "title": "Final Fantasy Adventure", "release_date": "28/06/1991" },
        { "title": "Final Fantasy Explorers", "release_date": "18/12/2014" },
        { "title": "Final Fantasy Dimensions", "release_date": "31/08/2010" },
        { "title": "Final Fantasy Dimensions II", "release_date": "01/11/2017" },
        { "title": "World of Final Fantasy", "release_date": "25/10/2016" },
        { "title": "Final Fantasy Brave Exvius", "release_date": "29/10/2015" },
        { "title": "Final Fantasy Record Keeper", "release_date": "24/09/2014" },
        { "title": "Dissidia Final Fantasy", "release_date": "18/12/2008" },
        { "title": "Dissidia 012 Final Fantasy", "release_date": "03/03/2011" },
        { "title": "Dissidia Final Fantasy NT", "release_date": "30/01/2018" },
        { "title": "Final Fantasy VII: Dirge of Cerberus", "release_date": "17/01/2006" },
        { "title": "Final Fantasy VII: Crisis Core", "release_date": "13/09/2007" },
        { "title": "Final Fantasy VII: Ever Crisis", "release_date": "07/09/2023" },
        { "title": "Final Fantasy VII Remake", "release_date": "10/04/2020" },
        { "title": "Final Fantasy VII Remake Intergrade", "release_date": "10/06/2021" },
        { "title": "Final Fantasy X-2", "release_date": "13/03/2003" },
        { "title": "Final Fantasy XII: Revenant Wings", "release_date": "26/04/2007" },
        { "title": "Final Fantasy XIII-2", "release_date": "15/12/2011" },
        { "title": "Lightning Returns: Final Fantasy XIII", "release_date": "21/11/2013" }
      ]

    }
  },
  methods: {
    onItemClick(item) {
      
    }
  }
}
</script>
<style>
main {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
}
</style>