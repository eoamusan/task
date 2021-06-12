import postConstants from 'constants/postConstants';

const initialState = {
    requesting: false,
    posts: []
};

export default function posts(state = initialState, action) {
    switch (action.type) {
        case postConstants.FETCH_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case postConstants.FETCH_SUCCESS:
            return {
                ...state,
                requesting: false,
                posts: action.posts
            };
        case postConstants.FETCH_FAILURE:
            return {
                ...state,
                requesting: false,
                posts: []
            };
        case postConstants.FETCH_AUTHOR_REQUEST:
            state.posts[state.posts.findIndex(post => post.id === action.postId)] = {
                ...state.posts[state.posts.findIndex(post => post.id === action.postId)],
                fetchingAuthor: true
            }

            return {
                ...state
            };
        case postConstants.FETCH_AUTHOR_SUCCESS:
            state.posts[state.posts.findIndex(post => post.id === action.postId)] = {
                ...state.posts[state.posts.findIndex(post => post.id === action.postId)],
                authorObj: action.author,
                fetchingAuthor: false
            }

            return {
                ...state
            };
        case postConstants.FETCH_AUTHOR_FAILURE:
            state.posts[state.posts.findIndex(post => post.id === action.postId)] = {
                ...state.posts[state.posts.findIndex(post => post.id === action.postId)],
                fetchingAuthor: false
            }

            return {
                ...state
            };
        default:
            return state;
    }
}