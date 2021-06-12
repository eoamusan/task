import decode from "jwt-decode";
import authService from "./authService";

export const appService = {
    fetchFrom,
    loggedIn
};

function fetchFrom(url, options) {
    // performs api calls sending the required authentication headers
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };

    // Setting Authorization header
    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    if (loggedIn()) {
        headers.Authorization = "Bearer " + getToken();
    }

    return fetch(url, {
        headers,
        ...options,
    })
        .then((res) => handleResponse(res))
        .then((response) => {
            return response;
        });
}

function loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = getToken(); // Getting token from localstorage

    return !!token && !isTokenExpired(token); // handwaiving here
}

function getToken() {
    // Retrieves the user token from localStorage
    let user = JSON.parse(localStorage.getItem(`saved-user`));

    return user ? user.token : user;
}

function handleResponse(response) {
    return response.text().then((text) => {
        let data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                authService.logout();
            }

            data.status = response.status;

            const error = (data && data) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

function isTokenExpired(token) {
    try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
            // Checking if token is expired. N
            return true;
        } else return false;
    } catch (err) {
        return false;
    }
}

export default appService;
