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

async function share(url, title) {
    if (navigator.share) {
        console.log(url);
        try {
            await navigator.share({
                title,
                url
            });
        } catch (err) {
            console.log("share canceled");
        }
    } else {
        alert("share not supported by your browser");
    }
  }

export { post, share };
