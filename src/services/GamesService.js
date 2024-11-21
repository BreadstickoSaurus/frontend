const BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { post } from "@/services/helper";
import LoginService from "./LoginService";

export default class GamesService {
    async all(userId) {
        const response = await fetch(`${BASE_URL}game/collection/${userId}`);
        return response.json();
    }

    async details(gameId) {
        const response = await fetch(`${BASE_URL}game/${gameId}`);
        return response.json();
    }

    async addGame(game) {
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

    async deleteGame(gameId) {
        const response = await fetch(
            `${BASE_URL}game/${gameId}`,
            {
                method: 'DELETE'
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

    async addAltTitles(altTitles, gameId) {
        const response = await post(`game/${gameId}/altTitles`, JSON.stringify({altTitles: altTitles}));
        return response.json();
    }

    async removeAltTitles(altTitles, gameId) {
        const response = await fetch(
            `${BASE_URL}game/${gameId}/altTitles`,
            {
                method: 'DELETE',
                body: JSON.stringify({
                    altTitles: altTitles
                })
            }
        );
        return response.json();
    }
}