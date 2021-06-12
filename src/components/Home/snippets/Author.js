import React, { useEffect } from 'react'
import { postActions } from 'actions/postActions'
import { useDispatch } from 'react-redux'

const Author = ({ post }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!post.authorObj && !post.fetchingAuthor) {
            dispatch(postActions.fetchAuthor(post.id, post.author));
        }
    });

    return (
        <div className="author">
            <strong>Author</strong>:
            <span itemProp="author" className="capitalize">{!post.authorObj ? "Loading ..." : post?.authorObj?.name}</span>
        </div>
    )
}

export default Author;
