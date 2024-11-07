const BASE_URL = import.meta.env.VITE_API_BASE_URL;

async function post(url, body) {
    return fetch(
        BASE_URL + url,
        {
            method: 'POST',
            body: body
        }
    );
}

export { post };
