import appService from './appService';

const pageService = {
    fetchPages
};

function fetchPages() {
    const requestOptions = {
        method: 'GET',
    };

    let url = `${process.env.REACT_APP_BASE_URL}wp/v2/pages`;

    return appService
        .fetchFrom(url, requestOptions)
        .then(pages => {
            return pages;
        });
}

export default pageService;
