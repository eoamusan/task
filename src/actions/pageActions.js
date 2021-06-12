import pageConstants from 'constants/pageConstants';
import { toast } from 'react-toastify';
import pageService from 'services/pageService';

export const pageActions = {
    fetchPages
};

function fetchPages() {
    return (dispatch) => {
        dispatch(request());

        pageService.fetchPages().then(
            (pages) => {
                dispatch(success(pages));
            },
            (error) => {
                if (error.message) {
                    toast.error(error.message);

                    dispatch(failure(error.message));
                }
            }
        );
    };

    function request() {
        return { type: pageConstants.FETCH_REQUEST };
    }
    function success(pages) {
        return { type: pageConstants.FETCH_SUCCESS, pages };
    }
    function failure(error) {
        return { type: pageConstants.FETCH_FAILURE, error };
    }
}
