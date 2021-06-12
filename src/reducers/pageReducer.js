import pageConstants from 'constants/pageConstants';

const initialState = {
    requesting: false,
    pages: []
};

export default function pages(state = initialState, action) {
    switch (action.type) {
        case pageConstants.FETCH_REQUEST:
            return {
                ...state,
                requesting: true
            };
        case pageConstants.FETCH_SUCCESS:
            return {
                ...state,
                requesting: false,
                pages: action.pages
            };
        case pageConstants.FETCH_FAILURE:
            return {
                ...state,
                requesting: false,
                pages: []
            };
        default:
            return state;
    }
}