const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { post } from "@/services/helper";
import GamesService from "./GamesService";
import LoginService from "./LoginService";

export default class WishlistService extends GamesService {
    async all(userId) {
        const response = await fetch(`${BASE_URL}game/wishlist/${userId}`);
        return response.json();
    }

    async addGame(game) {
        const loginService = new LoginService();
        const response = await post(`game/wishlist/${loginService.userId}`, JSON.stringify(game));
        return response.json();
    }

    async search(q) {
        const response = await fetch(`${BASE_URL}game/search/basic?q=${q}`);
        return response.json();
    }

    async semanticSearch(q) {
        const response = await fetch(`${BASE_URL}game/search/semantic?q=${q}`);
        return response.json();
    }
}