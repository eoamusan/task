import { push } from 'connected-react-router';
import authConstants from 'constants/authConstants';
import { toast } from 'react-toastify';
import authService from 'services/authService';

export const authActions = {
    login,
    logout
};

function login(user) {
    return (dispatch) => {
        dispatch(request());

        authService.login(user).then(
            (user) => {
                dispatch(success(user.user));

                dispatch(push(`/`));
            },
            (error) => {
                if (error) {
                    toast.error("Something went wrong: Check credentials and try again");

                    dispatch(failure(error.message));
                }
            }
        );
    };

    function request() {
        return { type: authConstants.LOGIN_REQUEST };
    }
    function success(user) {
        return { type: authConstants.LOGIN_SUCCESS, user };
    }
    function failure(error) {
        return { type: authConstants.LOGIN_FAILURE, error };
    }
}

function logout() {
    authService.logout();

    return { type: authConstants.LOGOUT };
}