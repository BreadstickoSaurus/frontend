const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { post } from "@/services/helper";
import LoginService from "./LoginService";

export default class GamesService {
    async fetchCollection(userId) {
        const response = await fetch(`${BASE_URL}game/collection/${userId}`);
        return response.json().then(json => json.developers);
    }

    async addGameToCollection(game) {
        const loginService = new LoginService();
        const response = await post(`game/collection/${loginService.userId}`, JSON.stringify(game));
        return response.json();
    }
}