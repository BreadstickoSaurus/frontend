const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default class GamesService {
    async fetchCollection(userId) {
        const response = await fetch(`${BASE_URL}game/collection/${userId}`);
        return response.json().then(json => json.developers);
    }
}