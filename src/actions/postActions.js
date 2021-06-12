import postConstants from "constants/postConstants";
import { toast } from "react-toastify";
import postService from "services/postService";

export const postActions = {
    fetchPosts,
    fetchAuthor
};

function fetchPosts() {
    return (dispatch) => {
        dispatch(request());

        postService.fetchPosts().then(
            (posts) => {
                dispatch(success(posts));
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
        return { type: postConstants.FETCH_REQUEST };
    }
    function success(posts) {
        return { type: postConstants.FETCH_SUCCESS, posts };
    }
    function failure(error) {
        return { type: postConstants.FETCH_FAILURE, error };
    }
}

function fetchAuthor(postId, authorId) {
    return (dispatch) => {
        dispatch(request());

        postService.fetchAuthor(authorId).then(
            (author) => {
                dispatch(success(author));
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
        return { type: postConstants.FETCH_AUTHOR_REQUEST, postId };
    }
    function success(author) {
        return { type: postConstants.FETCH_AUTHOR_SUCCESS, postId, author };
    }
    function failure(error) {
        return { type: postConstants.FETCH_AUTHOR_FAILURE, error };
    }
}
