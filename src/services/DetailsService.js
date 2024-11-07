import { post } from '@/services/helper';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default class DetailsService {
    async fetchDevelopers() {
        const response = await fetch(`${BASE_URL}developers`);
        return response.json().then(json => json.developers);
    }

    async addDeveloper(developer) {
        const response = await post("developers", JSON.stringify(developer));
        return response.json();
    }

    async fetchPublishers() {
        const response = await fetch(`${BASE_URL}publishers`);
        return response.json().then(json => json.publishers);
    }

    async addPublisher(publisher) {
        const response = await post("publishers", JSON.stringify(publisher));
        return response.json();
    }

    async fetchGenres() {
        const response = await fetch(`${BASE_URL}genres`);
        return response.json().then(json => json.genres);
    }

    async addGenre(genre) {
        const response = await post("genres", JSON.stringify(genre));
        return response.json();
    }

    async fetchPlatforms() {
        const response = await fetch(`${BASE_URL}platforms`);
        return response.json().then(json => json.platforms);
    }

    async addPlatform(platform) {
        const response = await post("platforms", JSON.stringify(platform));
        return response.json();
    }

    async fetchCountries() {
        const response = await fetch(`${BASE_URL}countries`);
        return response.json().then(json => json.countries);
    }

    async fetchStates() {
        const response = await fetch(`${BASE_URL}states`);
        return response.json().then(json => json.states);
    }
}