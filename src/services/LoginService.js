const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default class LoginService {
    constructor() {
        if(LoginService._instance) {
            return LoginService._instance;
        }
        this.userId = null;
        LoginService._instance = this;
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
        const json = response.json();
        this.userId = json.status ? await json.id : null;
        return json;
    }

    logout() {
        this.userId = null;
    }
}