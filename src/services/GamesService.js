const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { post } from "@/services/helper";
import LoginService from "./LoginService";

export default class GamesService {
    async fetchCollection(userId) {
        const response = await fetch(`${BASE_URL}game/collection/${userId}`);
        return response.json();
    }

    async fetchGameDetails(gameId) {
        const response = await fetch(`${BASE_URL}game/${gameId}`);
        return response.json();
    }

    async addGameToCollection(game) {
        const loginService = new LoginService();
        const response = await post(`game/collection/${loginService.userId}`, JSON.stringify(game));
        return response.json();
    }

    async updateGame(game, gameId) {
        const response = await fetch(
            `${BASE_URL}game/${gameId}`,
            {
                method: 'PUT',
                body: JSON.stringify(game)
            }
        );
        return response.json();
    }

    async fetchImages(gameId) {
        const response = await fetch(`${BASE_URL}game/${gameId}/images`);
        return response.json().then(json => json.imageUrls);
    }

    async addImages(images, gameId) {
        const response = await post(`game/${gameId}/images`, images);
        return response.json();
    }

    async removeImage(removedImage, gameId) {
        const response = await fetch(
            `${BASE_URL}game/${gameId}/images`,
            {
                method: 'DELETE',
                body: JSON.stringify({
                    imageUrl: removedImage
                })
            }
        );
        return response.json();
    }

    async addAltTitle(altTitle, gameId) {
        return;
    }

    async removeAltTitle(altTitle, gameId) {
        return; //TODO
    }
}