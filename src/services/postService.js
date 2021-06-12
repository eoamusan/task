import appService from './appService';

const postService = {
    fetchPosts,
    fetchAuthor
};

function fetchPosts() {
    const requestOptions = {
        method: 'GET',
    };

    let url = `${process.env.REACT_APP_BASE_URL}wp/v2/posts`;

    return appService
        .fetchFrom(url, requestOptions)
        .then(posts => {
            return posts;
        });
}

function fetchAuthor(authorId) {
    const requestOptions = {
        method: 'GET',
    };

    let url = `${process.env.REACT_APP_BASE_URL}wp/v2/users/${authorId}`;

    return appService
        .fetchFrom(url, requestOptions)
        .then(author => {
            return author;
        });
}

export default postService;
