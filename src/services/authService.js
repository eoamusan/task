import decode from "jwt-decode";
import appService from "./appService";

const authService = {
    login,
    logout,
};

function login(user) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user),
    };

    return appService
        .fetchFrom(`${process.env.REACT_APP_BASE_URL}jwt-auth/v1/token`, requestOptions)
        .then((user) => {
            user.account = decode(user.token);

            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(`saved-user`, JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(`saved-user`);
}

export default authService;
