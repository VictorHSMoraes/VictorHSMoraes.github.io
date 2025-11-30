const API_URL = "https://back1-yktp.onrender.com";

async function apiRequest(endpoint, method = "GET", body = null, token = null) {
    const options = {
        method,
        headers: { "Content-Type": "application/json" }
    };
    if (token) options.headers["Authorization"] = `Bearer ${token}`;
    if (body) options.body = JSON.stringify(body);
    const res = await fetch(API_URL + endpoint, options);
    return res.json();
}
