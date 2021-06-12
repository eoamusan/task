import { postActions } from 'actions/postActions';
import moment from 'moment';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import 'styles/post.css'
import Author from './snippets/Author';

const Home = ({ user = {} }) => {
    const dispatch = useDispatch();

    const post = useSelector(state => state.posts);

    useEffect(() => {
        post.posts.length === 0 && dispatch(postActions.fetchPosts());
    }, [dispatch, post.posts.length]);

    return (
        <>
            {/* Should only show when user is logged in */}
            {user.account &&
                <section className="welcome logged-in">
                    Welcome <span className="capitalize">{user.user_display_name}!</span>
                </section>}

            {/* Retrieve blog posts from WP API. */}
            <div itemScope itemType="https://schema.org/Blog">
                {post.posts?.length > 0 ?
                    post.posts.map((post, index) =>
                        <article key={index} itemScope itemType="http://schema.org/BlogPosting" className="post">

                            <header>

                                <h2 itemProp="headline">
                                    <a href={post.link} target="_blank" rel="noreferrer">
                                        {post?.title?.rendered}
                                    </a>
                                </h2>

                                {/* publication date */}
                                <div className="date">
                                    <strong>Publish Date</strong>:
                                    <span itemProp="datePublished">
                                        <time dateTime={moment(post.date).format("YYYY-DD-MM")}>{moment(post.date).format("MMM D, YYYY")}</time>
                                    </span>
                                </div>

                                <Author
                                    post={post} />

                            </header>

                            <div itemProp="articleBody" className="content" dangerouslySetInnerHTML={{ __html: post?.excerpt?.rendered }}></div>

                        </article>
                    ) :
                    <div className="top-margin">Loading ...</div>
                }

            </div>
        </>
    )
};

export default Home;
