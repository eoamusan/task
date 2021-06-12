import { pageActions } from 'actions/pageActions';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const About = () => {
    const dispatch = useDispatch();

    const page = useSelector(state => state.pages);

    useEffect(() => {
        dispatch(pageActions.fetchPages());
    }, [dispatch]);

    return (
        <>
            <h1>
                About
            </h1>
            <div
                className="page"
                dangerouslySetInnerHTML={{
                    __html: page.pages?.length > 0 ?
                                page.pages?.find(page => page.slug === "about-us")?.content?.rendered
                            : "Loading..."
                }}></div>
        </>
    );
}

export default About;
