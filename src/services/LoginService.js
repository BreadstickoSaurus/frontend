const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default class LoginService {
    constructor() {
        this.userId = localStorage.userId ? localStorage.userId : null;
    }

    async register(name, pw) {
        const response = await fetch(
            BASE_URL + "register",
            {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    password: pw
                })
            }
        );
        return response.json();
    }

    async login(name, pw) {
        const response = await fetch(
            BASE_URL + "login",
            {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    password: pw
                })
            }
        );
        const json = await response.json();
        this.userId = json.success ? await json.id : null;
        localStorage.setItem("userId", this.userId);
        return json;
    }

    logout() {
        this.userId = null;
        localStorage.removeItem("userId");
    }
}